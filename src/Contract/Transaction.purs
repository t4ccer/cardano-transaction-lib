-- | A module that defines the different transaction data types, balancing
-- | functionality, transaction fees, signing and submission.
module Contract.Transaction
  ( BalancedSignedTransaction(BalancedSignedTransaction)
  , balanceTx
  , balanceTxE
  , balanceTxWithConstraints
  , balanceTxWithConstraintsE
  , balanceTxs
  , balanceTxsWithConstraints
  , createAdditionalUtxos
  , getTxMetadata
  , module BalanceTxError
  , module FinalizedTransaction
  , module X
  , signTransaction
  , submit
  , submitE
  , submitTxFromConstraints
  , submitTxFromConstraintsReturningFee
  , withBalancedTx
  , withBalancedTxWithConstraints
  , withBalancedTxs
  , withBalancedTxsWithConstraints
  , lookupTxHash
  , getTxFinalFee
  , scriptRefFromMintingPolicy
  ) where

import Prelude

import Aeson (class EncodeAeson)
import Cardano.Types
  ( Coin
  , GeneralTransactionMetadata
  , Transaction(Transaction)
  , TransactionHash
  , TransactionInput(TransactionInput)
  , TransactionOutput
  , TransactionUnspentOutput(TransactionUnspentOutput)
  , UtxoMap
  )
import Cardano.Types
  ( TransactionHash(TransactionHash)
  , TransactionInput(TransactionInput)
  , TransactionOutput(TransactionOutput)
  , TransactionUnspentOutput(TransactionUnspentOutput)
  ) as X
import Cardano.Types.PoolPubKeyHash (PoolPubKeyHash(PoolPubKeyHash)) as X
import Cardano.Types.ScriptRef (ScriptRef)
import Cardano.Types.Transaction as Hashing
import Contract.Monad (Contract, runContractInEnv)
import Contract.UnbalancedTx (mkUnbalancedTx)
import Control.Monad.Error.Class (catchError, liftEither, throwError)
import Control.Monad.Reader (ReaderT, asks, runReaderT)
import Control.Monad.Reader.Class (ask)
import Ctl.Internal.BalanceTx as B
import Ctl.Internal.BalanceTx.Constraints (BalanceTxConstraintsBuilder)
import Ctl.Internal.BalanceTx.Error
  ( Actual(Actual)
  , BalanceTxError
      ( BalanceInsufficientError
      , CouldNotConvertScriptOutputToTxInput
      , CouldNotGetCollateral
      , InsufficientCollateralUtxos
      , CouldNotGetUtxos
      , CollateralReturnError
      , CollateralReturnMinAdaValueCalcError
      , ExUnitsEvaluationFailed
      , InsufficientUtxoBalanceToCoverAsset
      , ReindexRedeemersError
      , UtxoLookupFailedFor
      , UtxoMinAdaValueCalculationFailed
      )
  , Expected(Expected)
  , explainBalanceTxError
  ) as BalanceTxError
import Ctl.Internal.BalanceTx.Types (FinalizedTransaction)
import Ctl.Internal.BalanceTx.Types
  ( FinalizedTransaction(FinalizedTransaction)
  ) as FinalizedTransaction
import Ctl.Internal.BalanceTx.UnattachedTx (UnindexedTx)
import Ctl.Internal.Contract.AwaitTxConfirmed
  ( awaitTxConfirmed
  , awaitTxConfirmedWithTimeout
  , awaitTxConfirmedWithTimeoutSlots
  , isTxConfirmed
  ) as X
import Ctl.Internal.Contract.MinFee (calculateMinFee) as X
import Ctl.Internal.Contract.Monad (getQueryHandle)
import Ctl.Internal.Contract.QueryHandle.Error (GetTxMetadataError)
import Ctl.Internal.Contract.QueryHandle.Error
  ( GetTxMetadataError
      ( GetTxMetadataTxNotFoundError
      , GetTxMetadataMetadataEmptyOrMissingError
      , GetTxMetadataClientError
      )
  ) as X
import Ctl.Internal.Contract.Sign (signTransaction) as Contract
import Ctl.Internal.Lens
  ( _amount
  , _auxiliaryData
  , _auxiliaryDataHash
  , _body
  , _certs
  , _collateral
  , _collateralReturn
  , _datum
  , _fee
  , _input
  , _inputs
  , _isValid
  , _mint
  , _networkId
  , _output
  , _outputs
  , _plutusData
  , _plutusScripts
  , _redeemers
  , _referenceInputs
  , _requiredSigners
  , _scriptDataHash
  , _scriptRef
  , _totalCollateral
  , _vkeys
  , _withdrawals
  , _witnessSet
  ) as X
import Ctl.Internal.Lens (_body, _fee, _outputs)
import Ctl.Internal.ProcessConstraints.UnbalancedTx (UnbalancedTx(UnbalancedTx))
import Ctl.Internal.Service.Error (ClientError)
import Contract.Types (MintingPolicy)
import Contract.Types as MintingPolicy
import Ctl.Internal.Types.ScriptLookups (ScriptLookups)
import Ctl.Internal.Types.TxConstraints (TxConstraints)
import Ctl.Internal.Types.UsedTxOuts
  ( UsedTxOuts
  , lockTransactionInputs
  , unlockTransactionInputs
  )
import Data.Array as Array
import Data.Array.NonEmpty as NonEmptyArray
import Data.Bifunctor (lmap)
import Data.Either (Either(Left, Right))
import Data.Foldable (foldl, length)
import Data.Generic.Rep (class Generic)
import Data.Lens.Getter (view)
import Data.Map (Map)
import Data.Map (empty, insert, toUnfoldable) as Map
import Data.Newtype (class Newtype, unwrap)
import Data.Show.Generic (genericShow)
import Data.Traversable (class Traversable, for_, traverse)
import Data.Tuple (Tuple(Tuple), fst)
import Data.Tuple.Nested (type (/\), (/\))
import Data.UInt (UInt)
import Effect.Aff (bracket, error)
import Effect.Aff.Class (liftAff)
import Effect.Class (liftEffect)
import Effect.Exception (try)
import Prim.Coerce (class Coercible)
import Safe.Coerce (coerce)

-- | Signs a transaction with potential failure.
signTransaction
  :: forall (tx :: Type)
   . Coercible tx Transaction
  => tx
  -> Contract BalancedSignedTransaction
signTransaction =
  map BalancedSignedTransaction
    <<< Contract.signTransaction
    <<< coerce

-- | Submits a `BalancedSignedTransaction`, which is the output of
-- | `signTransaction`.
submit
  :: BalancedSignedTransaction
  -> Contract TransactionHash
submit tx = do
  eiTxHash <- submitE tx
  liftEither $ flip lmap eiTxHash \err -> error $
    "Failed to submit tx:\n" <> show err

-- | Submits a `BalancedSignedTransaction`, which is the output of
-- | `signTransaction`. Preserves the errors returned by the backend in
-- | the case they need to be inspected.
submitE
  :: BalancedSignedTransaction
  -> Contract (Either ClientError TransactionHash)
submitE tx = do
  queryHandle <- getQueryHandle
  eiTxHash <- liftAff $ queryHandle.submitTx $ unwrap tx
  void $ asks (_.hooks >>> _.onSubmit) >>=
    traverse \hook -> liftEffect $ void $ try $ hook $ unwrap tx
  pure eiTxHash

-- | Helper to adapt to UsedTxOuts.
withUsedTxOuts
  :: forall (a :: Type)
   . ReaderT UsedTxOuts Contract a
  -> Contract a
withUsedTxOuts f = asks _.usedTxOuts >>= runReaderT f

-- Helper to avoid repetition.
withTransactions
  :: forall (a :: Type)
       (t :: Type -> Type)
       (ubtx :: Type)
       (tx :: Type)
   . Traversable t
  => (t ubtx -> Contract (t tx))
  -> (tx -> Transaction)
  -> t ubtx
  -> (t tx -> Contract a)
  -> Contract a
withTransactions prepare extract utxs action = do
  env <- ask
  let
    run :: forall (b :: Type). _ b -> _ b
    run = runContractInEnv env
  liftAff $ bracket
    (run (prepare utxs))
    (run <<< cleanup)
    (run <<< action)
  where
  cleanup txs = for_ txs
    (withUsedTxOuts <<< unlockTransactionInputs <<< extract)

withSingleTransaction
  :: forall (a :: Type) (ubtx :: Type) (tx :: Type)
   . (ubtx -> Contract tx)
  -> (tx -> Transaction)
  -> ubtx
  -> (tx -> Contract a)
  -> Contract a
withSingleTransaction prepare extract utx action =
  withTransactions (traverse prepare) extract (NonEmptyArray.singleton utx)
    (action <<< NonEmptyArray.head)

-- | Execute an action on an array of balanced
-- | transactions (`balanceTxs` will be called). Within
-- | this function, all transaction inputs used by these
-- | transactions will be locked, so that they are not used
-- | in any other context.
-- | After the function completes, the locks will be removed.
-- | Errors will be thrown.
withBalancedTxsWithConstraints
  :: forall (a :: Type)
   . Array (UnbalancedTx /\ BalanceTxConstraintsBuilder)
  -> (Array FinalizedTransaction -> Contract a)
  -> Contract a
withBalancedTxsWithConstraints =
  withTransactions balanceTxsWithConstraints unwrap

-- | Same as `withBalancedTxsWithConstraints`, but uses the default balancer
-- | constraints.
withBalancedTxs
  :: forall (a :: Type)
   . Array UnbalancedTx
  -> (Array FinalizedTransaction -> Contract a)
  -> Contract a
withBalancedTxs = withTransactions balanceTxs unwrap

-- | Execute an action on a balanced transaction (`balanceTx` will
-- | be called). Within this function, all transaction inputs
-- | used by this transaction will be locked, so that they are not
-- | used in any other context.
-- | After the function completes, the locks will be removed.
-- | Errors will be thrown.
withBalancedTxWithConstraints
  :: forall (a :: Type)
   . UnbalancedTx
  -> BalanceTxConstraintsBuilder
  -> (FinalizedTransaction -> Contract a)
  -> Contract a
withBalancedTxWithConstraints unbalancedTx =
  withSingleTransaction balanceAndLockWithConstraints unwrap
    <<< Tuple unbalancedTx

-- | Same as `withBalancedTxWithConstraints`, but uses the default balancer
-- | constraints.
withBalancedTx
  :: forall (a :: Type)
   . UnbalancedTx
  -> (FinalizedTransaction -> Contract a)
  -> Contract a
withBalancedTx = withSingleTransaction balanceAndLock unwrap

unUnbalancedTx
  :: UnbalancedTx -> UnindexedTx /\ Map TransactionInput TransactionOutput
unUnbalancedTx
  ( UnbalancedTx
      { transaction
      , datums
      , redeemers
      , usedUtxos
      }
  ) =
  { transaction, datums, redeemers } /\ usedUtxos

-- | Attempts to balance an `UnbalancedTx` using the specified
-- | balancer constraints.
-- |
-- | `balanceTxWithConstraints` is a throwing variant.
balanceTxWithConstraintsE
  :: UnbalancedTx
  -> BalanceTxConstraintsBuilder
  -> Contract (Either BalanceTxError.BalanceTxError FinalizedTransaction)
balanceTxWithConstraintsE tx =
  let
    tx' /\ ix = unUnbalancedTx tx
  in
    B.balanceTxWithConstraints tx' ix

-- | Attempts to balance an `UnbalancedTx` using the specified
-- | balancer constraints.
-- |
-- | 'Throwing' variant of `balanceTxWithConstraintsE`.
balanceTxWithConstraints
  :: UnbalancedTx
  -> BalanceTxConstraintsBuilder
  -> Contract FinalizedTransaction
balanceTxWithConstraints tx bcb = do
  result <- balanceTxWithConstraintsE tx bcb
  case result of
    Left err -> throwError $ error $ BalanceTxError.explainBalanceTxError err
    Right ftx -> pure ftx

-- | Balance a transaction without providing balancer constraints.
-- |
-- | `balanceTx` is a throwing variant.
balanceTxE
  :: UnbalancedTx
  -> Contract (Either BalanceTxError.BalanceTxError FinalizedTransaction)
balanceTxE = flip balanceTxWithConstraintsE mempty

-- | Balance a transaction without providing balancer constraints.
-- |
-- | `balanceTxE` is a non-throwing version of this function.
balanceTx :: UnbalancedTx -> Contract FinalizedTransaction
balanceTx utx = do
  result <- balanceTxE utx
  case result of
    Left err -> throwError $ error $ BalanceTxError.explainBalanceTxError err
    Right ftx -> pure ftx

-- | Balances each transaction using specified balancer constraint sets and
-- | locks the used inputs so that they cannot be reused by subsequent
-- | transactions.
balanceTxsWithConstraints
  :: forall (t :: Type -> Type)
   . Traversable t
  => t (UnbalancedTx /\ BalanceTxConstraintsBuilder)
  -> Contract (t FinalizedTransaction)
balanceTxsWithConstraints unbalancedTxs =
  unlockAllOnError $ traverse balanceAndLockWithConstraints unbalancedTxs
  where
  unlockAllOnError :: forall (a :: Type). Contract a -> Contract a
  unlockAllOnError f = catchError f $ \e -> do
    for_ unbalancedTxs $
      withUsedTxOuts <<< unlockTransactionInputs <<< uutxToTx <<< fst
    throwError e

  uutxToTx :: UnbalancedTx -> Transaction
  uutxToTx = _.transaction <<< unwrap

-- | Same as `balanceTxsWithConstraints`, but uses the default balancer
-- | constraints.
balanceTxs
  :: forall (t :: Type -> Type)
   . Traversable t
  => t UnbalancedTx
  -> Contract (t FinalizedTransaction)
balanceTxs = balanceTxsWithConstraints <<< map (flip Tuple mempty)

balanceAndLockWithConstraints
  :: UnbalancedTx /\ BalanceTxConstraintsBuilder
  -> Contract FinalizedTransaction
balanceAndLockWithConstraints (unbalancedTx /\ constraints) = do
  balancedTx <- balanceTxWithConstraints unbalancedTx constraints
  void $ withUsedTxOuts $
    lockTransactionInputs (unwrap balancedTx)
  pure balancedTx

balanceAndLock
  :: UnbalancedTx
  -> Contract FinalizedTransaction
balanceAndLock = balanceAndLockWithConstraints <<< flip Tuple mempty

newtype BalancedSignedTransaction = BalancedSignedTransaction Transaction

derive instance Generic BalancedSignedTransaction _
derive instance Newtype BalancedSignedTransaction _
derive newtype instance Eq BalancedSignedTransaction
derive newtype instance EncodeAeson BalancedSignedTransaction

instance Show BalancedSignedTransaction where
  show = genericShow

-- | Fetch transaction metadata.
-- | Returns `Right` when the transaction exists and metadata was non-empty
getTxMetadata
  :: TransactionHash
  -> Contract (Either GetTxMetadataError GeneralTransactionMetadata)
getTxMetadata th = do
  queryHandle <- getQueryHandle
  liftAff $ queryHandle.getTxMetadata th

-- | Builds an expected utxo set from transaction outputs. Predicts output
-- | references (`TransactionInput`s) for each output by calculating the
-- | transaction hash and indexing the outputs in the order they appear in the
-- | transaction. This function should be used for transaction chaining
-- | in conjunction with `mustUseAdditionalUtxos` balancer constraint.
createAdditionalUtxos
  :: forall (tx :: Type)
   . Coercible tx Transaction
  => tx
  -> Contract UtxoMap
createAdditionalUtxos tx = do
  let transactionId = Hashing.hashTransaction $ coerce tx
  let
    txOutputs :: Array TransactionOutput
    txOutputs = view (_body <<< _outputs) $ coerce tx

    txIn :: UInt -> TransactionInput
    txIn index = TransactionInput { transactionId, index }

  pure $ txOutputs #
    foldl (\utxo txOut -> Map.insert (txIn $ length utxo) txOut utxo) Map.empty

submitTxFromConstraintsReturningFee
  :: ScriptLookups
  -> TxConstraints
  -> Contract { txHash :: TransactionHash, txFinalFee :: Coin }
submitTxFromConstraintsReturningFee lookups constraints = do
  unbalancedTx <- mkUnbalancedTx lookups constraints
  balancedTx <- balanceTx unbalancedTx
  balancedSignedTx <- signTransaction balancedTx
  txHash <- submit balancedSignedTx
  pure { txHash, txFinalFee: getTxFinalFee balancedSignedTx }

submitTxFromConstraints
  :: ScriptLookups
  -> TxConstraints
  -> Contract TransactionHash
submitTxFromConstraints lookups constraints =
  _.txHash <$> submitTxFromConstraintsReturningFee lookups constraints

lookupTxHash
  :: TransactionHash -> UtxoMap -> Array TransactionUnspentOutput
lookupTxHash txHash utxos =
  map (\(input /\ output) -> TransactionUnspentOutput { input, output })
    $ Array.filter (fst >>> unwrap >>> _.transactionId >>> eq txHash)
    $ Map.toUnfoldable utxos

getTxFinalFee :: BalancedSignedTransaction -> Coin
getTxFinalFee =
  view (_body <<< _fee) <<< unwrap

scriptRefFromMintingPolicy :: MintingPolicy -> ScriptRef
scriptRefFromMintingPolicy = MintingPolicy.toScriptRef
