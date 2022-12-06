-- | CTL query layer monad
module Ctl.Internal.QueryM
  ( module ExportDispatcher
  , module ExportServerConfig
  , ClientError
      ( ClientHttpError
      , ClientHttpResponseError
      , ClientDecodeJsonError
      , ClientEncodingError
      , ClientOtherError
      )
  , ClusterSetup
  , DatumCacheListeners
  , DatumCacheWebSocket
  , DefaultQueryEnv
  , ListenerSet
  , OgmiosListeners
  , OgmiosWebSocket
  , QueryConfig
  , QueryM
  , ParQueryM
  , QueryMExtended(QueryMExtended)
  , QueryEnv
  , QueryRuntime
  , SubmitTxListenerSet
  , WebSocket(WebSocket)
  , allowError
  , evaluateTxOgmios
  , getChainTip
  , getLogger
  , getProtocolParametersAff
  , getSystemStartAff
  , getEraSummariesAff
  , handleAffjaxResponse
  , listeners
  , postAeson
  , mkDatumCacheWebSocketAff
  , mkDatumCacheRequest
  , mkListenerSet
  , defaultMessageListener
  , mkOgmiosRequest
  , mkOgmiosRequestAff
  , mkOgmiosWebSocketAff
  , mkQueryRuntime
  , mkRequest
  , mkRequestAff
  , scriptToAeson
  , submitTxOgmios
  , underlyingWebSocket
  ) where

import Prelude

import Aeson
  ( class DecodeAeson
  , Aeson
  , JsonDecodeError(TypeMismatch)
  , decodeAeson
  , encodeAeson
  , getFieldOptional
  , parseJsonStringToAeson
  , stringifyAeson
  )
import Affjax (Error, Response, defaultRequest, printError, request) as Affjax
import Affjax.RequestBody as Affjax.RequestBody
import Affjax.RequestHeader as Affjax.RequestHeader
import Affjax.ResponseFormat as Affjax.ResponseFormat
import Affjax.StatusCode as Affjax.StatusCode
import Control.Alt (class Alt)
import Control.Alternative (class Alternative)
import Control.Monad.Error.Class
  ( class MonadError
  , class MonadThrow
  , liftEither
  , throwError
  )
import Control.Monad.Logger.Class (class MonadLogger)
import Control.Monad.Reader.Class (class MonadAsk, class MonadReader)
import Control.Monad.Reader.Trans
  ( ReaderT(ReaderT)
  , asks
  )
import Control.Monad.Rec.Class (class MonadRec)
import Control.Parallel (class Parallel, parallel, sequential)
import Control.Plus (class Plus)
import Ctl.Internal.Cardano.Types.Transaction (PoolPubKeyHash)
import Ctl.Internal.Helpers (logWithLevel)
import Ctl.Internal.JsWebSocket
  ( JsWebSocket
  , Url
  , _mkWebSocket
  , _onWsConnect
  , _onWsError
  , _onWsMessage
  , _removeOnWsError
  , _wsClose
  , _wsFinalize
  , _wsSend
  )
import Ctl.Internal.Logging (Logger, mkLogger)
import Ctl.Internal.QueryM.DatumCacheWsp
  ( GetTxByHashR
  )
import Ctl.Internal.QueryM.DatumCacheWsp as DcWsp
import Ctl.Internal.QueryM.Dispatcher
  ( DispatchError(JsError, JsonError, FaultError, ListenerCancelled)
  , Dispatcher
  , GenericPendingRequests
  , PendingRequests
  , PendingSubmitTxRequests
  , RequestBody
  , WebsocketDispatch
  , dispatchErrorToError
  , mkWebsocketDispatch
  , newDispatcher
  , newPendingRequests
  ) as ExportDispatcher
import Ctl.Internal.QueryM.Dispatcher
  ( DispatchError(JsonError, FaultError, ListenerCancelled)
  , Dispatcher
  , GenericPendingRequests
  , PendingRequests
  , PendingSubmitTxRequests
  , RequestBody
  , WebsocketDispatch
  , dispatchErrorToError
  , mkWebsocketDispatch
  , newDispatcher
  , newPendingRequests
  )
import Ctl.Internal.QueryM.JsonWsp as JsonWsp
import Ctl.Internal.QueryM.Ogmios
  ( AdditionalUtxoSet
  , DelegationsAndRewardsR
  , PoolIdsR
  , PoolParametersR
  , TxHash
  , aesonObject
  )
import Ctl.Internal.QueryM.Ogmios as Ogmios
import Ctl.Internal.QueryM.ServerConfig
  ( Host
  , ServerConfig
  , defaultDatumCacheWsConfig
  , defaultOgmiosWsConfig
  , defaultServerConfig
  , mkHttpUrl
  , mkOgmiosDatumCacheWsUrl
  , mkServerUrl
  , mkWsUrl
  ) as ExportServerConfig
import Ctl.Internal.QueryM.ServerConfig
  ( ServerConfig
  , mkOgmiosDatumCacheWsUrl
  , mkWsUrl
  )
import Ctl.Internal.QueryM.UniqueId (ListenerId)
import Ctl.Internal.Serialization.Address (NetworkId)
import Ctl.Internal.Types.ByteArray (byteArrayToHex)
import Ctl.Internal.Types.CborBytes (CborBytes)
import Ctl.Internal.Types.Chain as Chain
import Ctl.Internal.Types.Scripts (PlutusScript)
import Ctl.Internal.Types.UsedTxOuts (UsedTxOuts, newUsedTxOuts)
import Ctl.Internal.Wallet (Wallet)
import Ctl.Internal.Wallet.Key (PrivatePaymentKey, PrivateStakeKey)
import Ctl.Internal.Wallet.Spec
  ( WalletSpec
  , mkWalletBySpec
  )
import Data.Bifunctor (lmap)
import Data.Either (Either(Left, Right), either, isRight)
import Data.Foldable (foldl)
import Data.HTTP.Method (Method(POST))
import Data.Log.Level (LogLevel(Error, Debug))
import Data.Log.Message (Message)
import Data.Map as Map
import Data.Maybe (Maybe(Just, Nothing), fromMaybe, isJust, maybe)
import Data.MediaType.Common (applicationJSON)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Traversable (for, for_, traverse_)
import Data.Tuple (fst)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Aff
  ( Aff
  , Canceler(Canceler)
  , ParAff
  , delay
  , launchAff_
  , makeAff
  , runAff_
  )
import Effect.Aff.Class (class MonadAff, liftAff)
import Effect.Class (class MonadEffect, liftEffect)
import Effect.Exception (Error, error, throw)
import Effect.Ref (Ref)
import Effect.Ref as Ref

-- This module defines an Aff interface for Ogmios Websocket Queries
-- Since WebSockets do not define a mechanism for linking request/response
-- Or for verifying that the connection is live, those concerns are addressed
-- here

-- | Cluster setup contains everything that is needed to run a `Contract` on
-- | a local cluster: paramters to connect to the services and private keys
-- | that are pre-funded with Ada on that cluster
type ClusterSetup =
  { ctlServerConfig :: Maybe ServerConfig
  , ogmiosConfig :: ServerConfig
  , datumCacheConfig :: ServerConfig
  , kupoConfig :: ServerConfig
  , keys ::
      { payment :: PrivatePaymentKey
      , stake :: Maybe PrivateStakeKey
      }
  }

-- | `QueryConfig` contains a complete specification on how to initialize a
-- | `QueryM` environment.
-- | It includes:
-- | - server parameters for all the services
-- | - network ID
-- | - logging level
-- | - wallet setup instructions
-- | - optional custom logger
type QueryConfig =
  { ctlServerConfig :: Maybe ServerConfig
  , datumCacheConfig :: ServerConfig
  , ogmiosConfig :: ServerConfig
  , kupoConfig :: ServerConfig
  , networkId :: NetworkId
  , logLevel :: LogLevel
  , walletSpec :: Maybe WalletSpec
  , customLogger :: Maybe (LogLevel -> Message -> Aff Unit)
  , suppressLogs :: Boolean
  }

-- | Reusable part of `QueryRuntime` that can be shared between many `QueryM`
-- |  instances running in parallel.
-- |
-- | Includes:
-- | - WebSocket connections
-- | - A wallet connection
-- | - A data structure to keep UTxOs that has already been spent
-- | - Current protocol parameters
type QueryRuntime =
  { ogmiosWs :: OgmiosWebSocket
  , datumCacheWs :: DatumCacheWebSocket
  , wallet :: Maybe Wallet
  , usedTxOuts :: UsedTxOuts
  , pparams :: Ogmios.ProtocolParameters
  }

-- | `QueryEnv` contains everything needed for `QueryM` to run.
type QueryEnv (r :: Row Type) =
  { config :: QueryConfig
  , runtime :: QueryRuntime
  , extraConfig :: { | r }
  }

type DefaultQueryEnv = QueryEnv ()

type QueryM = QueryMExtended () Aff

type ParQueryM = QueryMExtended () ParAff

newtype QueryMExtended (r :: Row Type) (m :: Type -> Type) (a :: Type) =
  QueryMExtended
    (ReaderT (QueryEnv r) m a)

derive instance Newtype (QueryMExtended r m a) _
derive newtype instance Functor m => Functor (QueryMExtended r m)
derive newtype instance Apply m => Apply (QueryMExtended r m)
derive newtype instance Applicative m => Applicative (QueryMExtended r m)
derive newtype instance Bind m => Bind (QueryMExtended r m)
derive newtype instance Alt m => Alt (QueryMExtended r m)
derive newtype instance Plus m => Plus (QueryMExtended r m)
derive newtype instance Alternative m => Alternative (QueryMExtended r m)
derive newtype instance Monad (QueryMExtended r Aff)
derive newtype instance MonadEffect (QueryMExtended r Aff)
derive newtype instance MonadAff (QueryMExtended r Aff)
derive newtype instance
  ( Semigroup a
  , Apply m
  ) =>
  Semigroup (QueryMExtended r m a)

derive newtype instance
  ( Monoid a
  , Applicative m
  ) =>
  Monoid (QueryMExtended r m a)

derive newtype instance MonadThrow Error (QueryMExtended r Aff)
derive newtype instance MonadError Error (QueryMExtended r Aff)
derive newtype instance MonadRec (QueryMExtended r Aff)
derive newtype instance MonadAsk (QueryEnv r) (QueryMExtended r Aff)
derive newtype instance MonadReader (QueryEnv r) (QueryMExtended r Aff)

instance MonadLogger (QueryMExtended r Aff) where
  log msg = do
    config <- asks $ _.config
    let
      logFunction =
        config # _.customLogger >>> fromMaybe logWithLevel
    liftAff $ logFunction config.logLevel msg

-- Newtype deriving complains about overlapping instances, so we wrap and
-- unwrap manually
instance Parallel (QueryMExtended r ParAff) (QueryMExtended r Aff) where
  parallel :: QueryMExtended r Aff ~> QueryMExtended r ParAff
  parallel = wrap <<< parallel <<< unwrap
  sequential :: QueryMExtended r ParAff ~> QueryMExtended r Aff
  sequential = wrap <<< sequential <<< unwrap

-- | Used in `mkQueryRuntime` only
data QueryRuntimeModel = QueryRuntimeModel
  DatumCacheWebSocket
  (OgmiosWebSocket /\ Ogmios.ProtocolParameters)
  (Maybe Wallet)

mkQueryRuntime
  :: QueryConfig
  -> Aff QueryRuntime
mkQueryRuntime config = do
  usedTxOuts <- newUsedTxOuts
  datumCacheWsRef <- liftEffect $ Ref.new Nothing
  QueryRuntimeModel datumCacheWs (ogmiosWs /\ pparams) wallet <- sequential $
    QueryRuntimeModel
      <$> parallel
        ( mkDatumCacheWebSocketAff datumCacheWsRef logger
            config.datumCacheConfig
        )
      <*> parallel do
        ogmiosWs <-
          mkOgmiosWebSocketAff datumCacheWsRef logger config.ogmiosConfig
        pparams <- getProtocolParametersAff ogmiosWs logger
        pure $ ogmiosWs /\ pparams
      <*> parallel (for config.walletSpec $ mkWalletBySpec config.networkId)
  pure
    { ogmiosWs
    , datumCacheWs
    , wallet
    , usedTxOuts
    , pparams
    }
  where
  logger = mkLogger config.logLevel config.customLogger

getProtocolParametersAff
  :: OgmiosWebSocket
  -> (LogLevel -> String -> Effect Unit)
  -> Aff Ogmios.ProtocolParameters
getProtocolParametersAff ogmiosWs logger =
  mkOgmiosRequestAff ogmiosWs logger Ogmios.queryProtocolParametersCall
    _.getProtocolParameters
    unit

getSystemStartAff
  :: OgmiosWebSocket
  -> (LogLevel -> String -> Effect Unit)
  -> Aff Ogmios.SystemStart
getSystemStartAff ogmiosWs logger =
  mkOgmiosRequestAff ogmiosWs logger Ogmios.querySystemStartCall
    _.systemStart
    unit

--------------------------------------------------------------------------------
-- Ogmios Local State Query Protocol
--------------------------------------------------------------------------------

getChainTip :: QueryM Chain.Tip
getChainTip = ogmiosChainTipToTip <$> mkOgmiosRequest Ogmios.queryChainTipCall
  _.chainTip
  unit
  where
  ogmiosChainTipToTip :: Ogmios.ChainTipQR -> Chain.Tip
  ogmiosChainTipToTip = case _ of
    Ogmios.CtChainOrigin _ -> Chain.TipAtGenesis
    Ogmios.CtChainPoint { slot, hash } -> Chain.Tip $ wrap
      { slot, blockHeaderHash: wrap $ unwrap hash }

--------------------------------------------------------------------------------
-- Ogmios Local Tx Submission Protocol
--------------------------------------------------------------------------------

submitTxOgmios :: TxHash -> CborBytes -> QueryM Ogmios.SubmitTxR
submitTxOgmios txHash tx = do
  ws <- asks $ underlyingWebSocket <<< _.ogmiosWs <<< _.runtime
  listeners' <- asks $ listeners <<< _.ogmiosWs <<< _.runtime
  cfg <- asks _.config
  liftAff $ mkRequestAff listeners' ws (mkLogger cfg.logLevel cfg.customLogger)
    Ogmios.submitTxCall
    _.submit
    (txHash /\ tx)

evaluateTxOgmios
  :: CborBytes -> AdditionalUtxoSet -> QueryM Ogmios.TxEvaluationR
evaluateTxOgmios cbor additionalUtxos = do
  ws <- asks $ underlyingWebSocket <<< _.ogmiosWs <<< _.runtime
  listeners' <- asks $ listeners <<< _.ogmiosWs <<< _.runtime
  cfg <- asks _.config
  liftAff $ mkRequestAff listeners' ws (mkLogger cfg.logLevel cfg.customLogger)
    Ogmios.evaluateTxCall
    _.evaluate
    (cbor /\ additionalUtxos)

--------------------------------------------------------------------------------
-- Ogmios Local Tx Monitor Protocol
--------------------------------------------------------------------------------

acquireMempoolSnapshotAff
  :: OgmiosWebSocket -> Logger -> Aff Ogmios.MempoolSnapshotAcquired
acquireMempoolSnapshotAff ogmiosWs logger =
  mkOgmiosRequestAff ogmiosWs logger Ogmios.acquireMempoolSnapshotCall
    _.acquireMempool
    unit

withMempoolSnapshot
  :: OgmiosWebSocket
  -> Logger
  -> (Maybe Ogmios.MempoolSnapshotAcquired -> Aff Unit)
  -> Effect Unit
withMempoolSnapshot ogmiosWs logger cont =
  flip runAff_ (acquireMempoolSnapshotAff ogmiosWs logger) $ case _ of
    Left err -> do
      logger Error $
        "Failed to acquire a mempool snapshot: Error: " <> show err
      launchAff_ (cont Nothing)
    Right mempoolSnapshot ->
      launchAff_ (cont $ Just mempoolSnapshot)

mempoolSnapshotHasTxAff
  :: OgmiosWebSocket
  -> Logger
  -> Ogmios.MempoolSnapshotAcquired
  -> TxHash
  -> Aff Boolean
mempoolSnapshotHasTxAff ogmiosWs logger ms =
  mkOgmiosRequestAff ogmiosWs logger (Ogmios.mempoolSnapshotHasTxCall ms)
    _.mempoolHasTx

--------------------------------------------------------------------------------
-- Datum Cache Queries
--------------------------------------------------------------------------------

checkTxByHashAff :: DatumCacheWebSocket -> Logger -> TxHash -> Aff Boolean
checkTxByHashAff datumCacheWs logger =
  mkDatumCacheRequestAff datumCacheWs logger DcWsp.getTxByHashCall _.getTxByHash
    >>> map (unwrap >>> isJust)

allowError
  :: forall (a :: Type). (Either Error a -> Effect Unit) -> a -> Effect Unit
allowError func = func <<< Right

--------------------------------------------------------------------------------
-- Affjax
--------------------------------------------------------------------------------

data ClientError
  = ClientHttpError Affjax.Error
  | ClientHttpResponseError String
  | ClientDecodeJsonError String JsonDecodeError
  | ClientEncodingError String
  | ClientOtherError String

-- No Show instance of Affjax.Error
instance Show ClientError where
  show (ClientHttpError err) =
    "(ClientHttpError "
      <> Affjax.printError err
      <> ")"
  show (ClientHttpResponseError err) =
    "(ClientHttpResponseError "
      <> show err
      <> ")"
  show (ClientDecodeJsonError jsonStr err) =
    "(ClientDecodeJsonError (" <> show jsonStr <> ") "
      <> show err
      <> ")"
  show (ClientEncodingError err) =
    "(ClientEncodingError "
      <> err
      <> ")"
  show (ClientOtherError err) =
    "(ClientOtherError "
      <> err
      <> ")"

-- Checks response status code and returns `ClientError` in case of failure,
-- otherwise attempts to decode the result.
--
-- This function solves the problem described there:
-- https://github.com/eviefp/purescript-affjax-errors
handleAffjaxResponse
  :: forall (result :: Type)
   . DecodeAeson result
  => Either Affjax.Error (Affjax.Response String)
  -> Either ClientError result
handleAffjaxResponse (Left affjaxError) =
  Left (ClientHttpError affjaxError)
handleAffjaxResponse
  (Right { status: Affjax.StatusCode.StatusCode statusCode, body })
  | statusCode < 200 || statusCode > 299 =
      Left (ClientHttpResponseError body)
  | otherwise =
      body # lmap (ClientDecodeJsonError body)
        <<< (decodeAeson <=< parseJsonStringToAeson)

-- We can't use Affjax's typical `post`, since there will be a mismatch between
-- the media type header and the request body
postAeson :: Url -> Aeson -> Aff (Either Affjax.Error (Affjax.Response String))
postAeson url body = Affjax.request $ Affjax.defaultRequest
  { method = Left POST
  , content = Just $ Affjax.RequestBody.String $ stringifyAeson body
  , url = url
  , responseFormat = Affjax.ResponseFormat.string
  , headers = [ Affjax.RequestHeader.ContentType applicationJSON ]
  }

-- It's easier to just write the encoder here than provide an `EncodeJson`
-- instance (there are some brutal cyclical dependency issues trying to
-- write an instance in the `Types.*` modules)
scriptToAeson :: PlutusScript -> Aeson
scriptToAeson = encodeAeson <<< byteArrayToHex <<< fst <<< unwrap

--------------------------------------------------------------------------------
-- Type-safe `WebSocket`
--------------------------------------------------------------------------------

-- don't export this constructor
-- type-safe websocket which has automated req/res dispatch and websocket
-- failure handling
data WebSocket listeners = WebSocket JsWebSocket listeners
type OgmiosWebSocket = WebSocket OgmiosListeners
type DatumCacheWebSocket = WebSocket DatumCacheListeners

-- getter
underlyingWebSocket :: forall (a :: Type). WebSocket a -> JsWebSocket
underlyingWebSocket (WebSocket ws _) = ws

-- getter
listeners :: forall (listeners :: Type). WebSocket listeners -> listeners
listeners (WebSocket _ ls) = ls

--------------------------------------------------------------------------------
-- OgmiosWebSocket Setup and PrimOps
--------------------------------------------------------------------------------

mkDatumCacheWebSocketAff
  :: Ref (Maybe DatumCacheWebSocket)
  -> Logger
  -> ServerConfig
  -> Aff DatumCacheWebSocket
mkDatumCacheWebSocketAff datumCacheWsRef logger serverConfig = do
  lens <- liftEffect $ mkDatumCacheWebSocketLens logger
  makeAff $ \continue ->
    mkServiceWebSocket lens (mkOgmiosDatumCacheWsUrl serverConfig) \res ->
      res # either (\_ -> continue res)
        (\ws -> Ref.write (Just ws) datumCacheWsRef *> continue res)

mkOgmiosWebSocketAff
  :: Ref (Maybe DatumCacheWebSocket)
  -> Logger
  -> ServerConfig
  -> Aff OgmiosWebSocket
mkOgmiosWebSocketAff datumCacheWsRef logger serverConfig = do
  lens <- liftEffect $ mkOgmiosWebSocketLens logger datumCacheWsRef
  makeAff $ mkServiceWebSocket lens (mkWsUrl serverConfig)

mkServiceWebSocket
  :: forall (listeners :: Type)
   . MkServiceWebSocketLens listeners
  -> Url
  -> (Either Error (WebSocket listeners) -> Effect Unit)
  -> Effect Canceler
mkServiceWebSocket lens url continue = do
  ws <- _mkWebSocket (lens.logger Debug) url
  let
    messageDispatch :: WebsocketDispatch
    messageDispatch = mkWebsocketDispatch lens.dispatcher

    -- We want to fail if the first connection attempt is not successful.
    -- Otherwise, we start reconnecting indefinitely.
    onFirstConnectionError :: String -> Effect Unit
    onFirstConnectionError errMessage = do
      _wsFinalize ws
      _wsClose ws
      lens.logger Error $
        "First connection to " <> lens.serviceName <> " WebSocket failed. "
          <> "Terminating. Error: "
          <> errMessage
      continue $ Left $ error errMessage
  firstConnectionErrorRef <- _onWsError ws onFirstConnectionError
  hasConnectedOnceRef <- Ref.new false
  _onWsConnect ws $ Ref.read hasConnectedOnceRef >>= case _ of
    true -> do
      lens.logger Debug $
        lens.serviceName <>
          " WebSocket connection re-established, resending pending requests..."
      lens.resendPendingRequests ws
    false -> do
      lens.logger Debug $ "Connection to " <> lens.serviceName <> " established"
      Ref.write true hasConnectedOnceRef
      _removeOnWsError ws firstConnectionErrorRef
      _onWsMessage ws (lens.logger Debug) $ defaultMessageListener lens.logger
        [ messageDispatch ]
      void $ _onWsError ws \err -> do
        lens.logger Debug $
          lens.serviceName <> " WebSocket error (" <> err <>
            "). Reconnecting..."
      -- continue $ Right (ws /\ dispatcher /\ pending)
      continue $ Right (lens.typedWebSocket ws)
  pure $ Canceler $ \err -> liftEffect do
    _wsFinalize ws
    _wsClose ws
    continue $ Left $ err

--------------------------------------------------------------------------------
-- Resend pending `SubmitTx` requests
--------------------------------------------------------------------------------

-- | For each pending `SubmitTx` request, checks whether the transaction has
-- | been added to the mempool or has been included in a block before retrying
-- | the request.
resendPendingSubmitRequests
  :: OgmiosWebSocket
  -> Ref (Maybe DatumCacheWebSocket)
  -> Logger
  -> (RequestBody -> Effect Unit)
  -> Dispatcher
  -> PendingSubmitTxRequests
  -> Effect Unit
resendPendingSubmitRequests ogmiosWs odcWs logger sendRequest dispatcher pr = do
  submitTxPendingRequests <- Ref.read pr
  unless (Map.isEmpty submitTxPendingRequests) do
    -- Acquiring a mempool snapshot should never fail and,
    -- after ws reconnection, should be instantaneous.
    withMempoolSnapshot ogmiosWs logger case _ of
      Nothing ->
        liftEffect $ traverse_ (sendRequest <<< fst) submitTxPendingRequests
      Just ms -> do
        -- A delay of 5 sec for transactions to be processed by the node
        -- and added to the mempool:
        delay (wrap 5000.0)
        let (pr' :: Array _) = Map.toUnfoldable submitTxPendingRequests
        for_ pr' \(listenerId /\ requestBody /\ txHash) ->
          handlePendingSubmitRequest ms listenerId requestBody txHash
  where
  log :: String -> Boolean -> TxHash -> Aff Unit
  log label value txHash =
    liftEffect $ logger Debug $
      label <> ": " <> show value <> " TxHash: " <> show txHash

  handlePendingSubmitRequest
    :: Ogmios.MempoolSnapshotAcquired
    -> ListenerId
    -> RequestBody
    -> TxHash
    -> Aff Unit
  handlePendingSubmitRequest ms listenerId requestBody txHash = do
    -- Check if the transaction was added to the mempool:
    txInMempool <- mempoolSnapshotHasTxAff ogmiosWs logger ms txHash
    log "Tx in the mempool" txInMempool txHash
    retrySubmitTx <-
      if txInMempool then pure false
      else do
        datumCacheWebSocket <- liftEffect do
          let err = "handlePendingSubmitRequest: failed to access ODC WebSocket"
          maybe (throw err) pure =<< Ref.read odcWs
        -- Check if the transaction was included in the block:
        txConfirmed <- checkTxByHashAff datumCacheWebSocket logger txHash
        log "Tx confirmed" txConfirmed txHash
        unless txConfirmed $ liftEffect do
          sendRequest requestBody
        pure (not txConfirmed)
    -- Manually dispatch `SubmitTx` response if resending is not required:
    unless retrySubmitTx $ liftEffect do
      Ref.modify_ (Map.delete listenerId) pr
      dispatchMap <- Ref.read dispatcher
      Ref.modify_ (Map.delete listenerId) dispatcher
      Map.lookup listenerId dispatchMap #
        maybe (pure unit) (_ $ submitSuccessPartialResp)
    where
    submitSuccessPartialResp :: Aeson
    submitSuccessPartialResp =
      encodeAeson
        { "result": { "SubmitSuccess": { "txId": txHash } } }

--------------------------------------------------------------------------------
-- `MkServiceWebSocketLens` for ogmios and ogmios-datum-cache
--------------------------------------------------------------------------------

type MkServiceWebSocketLens (listeners :: Type) =
  { serviceName :: String
  , dispatcher :: Dispatcher
  , logger :: Logger
  , typedWebSocket :: JsWebSocket -> WebSocket listeners
  , resendPendingRequests :: JsWebSocket -> Effect Unit
  }

mkDatumCacheWebSocketLens
  :: Logger -> Effect (MkServiceWebSocketLens DatumCacheListeners)
mkDatumCacheWebSocketLens logger = do
  dispatcher <- newDispatcher
  pendingRequests <- newPendingRequests
  pure $
    let
      datumCacheWebSocket :: JsWebSocket -> DatumCacheWebSocket
      datumCacheWebSocket ws = WebSocket ws
        { getTxByHash: mkListenerSet dispatcher pendingRequests
        }

      resendPendingRequests :: JsWebSocket -> Effect Unit
      resendPendingRequests ws =
        Ref.read pendingRequests >>= traverse_ (_wsSend ws (logger Debug))
    in
      { serviceName: "ogmios-datum-cache"
      , dispatcher
      , logger
      , typedWebSocket: datumCacheWebSocket
      , resendPendingRequests
      }

mkOgmiosWebSocketLens
  :: Logger
  -> Ref (Maybe DatumCacheWebSocket)
  -> Effect (MkServiceWebSocketLens OgmiosListeners)
mkOgmiosWebSocketLens logger datumCacheWebSocketRef = do
  dispatcher <- newDispatcher
  pendingRequests <- newPendingRequests
  pendingSubmitTxRequests <- newPendingRequests
  pure $
    let
      ogmiosWebSocket :: JsWebSocket -> OgmiosWebSocket
      ogmiosWebSocket ws = WebSocket ws
        { chainTip:
            mkListenerSet dispatcher pendingRequests
        , evaluate:
            mkListenerSet dispatcher pendingRequests
        , getProtocolParameters:
            mkListenerSet dispatcher pendingRequests
        , eraSummaries:
            mkListenerSet dispatcher pendingRequests
        , currentEpoch:
            mkListenerSet dispatcher pendingRequests
        , systemStart:
            mkListenerSet dispatcher pendingRequests
        , acquireMempool:
            mkListenerSet dispatcher pendingRequests
        , mempoolHasTx:
            mkListenerSet dispatcher pendingRequests
        , submit:
            mkSubmitTxListenerSet dispatcher pendingSubmitTxRequests
        , poolIds:
            mkListenerSet dispatcher pendingRequests
        , poolParameters:
            mkListenerSet dispatcher pendingRequests
        , delegationsAndRewards:
            mkListenerSet dispatcher pendingRequests
        }

      resendPendingRequests :: JsWebSocket -> Effect Unit
      resendPendingRequests ws = do
        let sendRequest = _wsSend ws (logger Debug)
        Ref.read pendingRequests >>= traverse_ sendRequest
        resendPendingSubmitRequests (ogmiosWebSocket ws) datumCacheWebSocketRef
          logger
          sendRequest
          dispatcher
          pendingSubmitTxRequests
    in
      { serviceName: "ogmios"
      , dispatcher
      , logger
      , typedWebSocket: ogmiosWebSocket
      , resendPendingRequests
      }

--------------------------------------------------------------------------------
-- ListenerSet
--------------------------------------------------------------------------------

type OgmiosListeners =
  { chainTip :: ListenerSet Unit Ogmios.ChainTipQR
  , submit :: SubmitTxListenerSet
  , evaluate ::
      ListenerSet (CborBytes /\ AdditionalUtxoSet) Ogmios.TxEvaluationR
  , getProtocolParameters :: ListenerSet Unit Ogmios.ProtocolParameters
  , eraSummaries :: ListenerSet Unit Ogmios.EraSummaries
  , currentEpoch :: ListenerSet Unit Ogmios.CurrentEpoch
  , systemStart :: ListenerSet Unit Ogmios.SystemStart
  , acquireMempool :: ListenerSet Unit Ogmios.MempoolSnapshotAcquired
  , mempoolHasTx :: ListenerSet TxHash Boolean
  , poolIds :: ListenerSet Unit PoolIdsR
  , poolParameters :: ListenerSet (Array PoolPubKeyHash) PoolParametersR
  , delegationsAndRewards :: ListenerSet (Array String) DelegationsAndRewardsR
  }

type DatumCacheListeners =
  { getTxByHash :: ListenerSet TxHash GetTxByHashR
  }

-- convenience type for adding additional query types later
type ListenerSet (request :: Type) (response :: Type) =
  { addMessageListener ::
      ListenerId
      -> (Either DispatchError response -> Effect Unit)
      -> Effect Unit
  , removeMessageListener :: ListenerId -> Effect Unit
  -- ^ Removes ID from dispatch map and pending requests queue.
  , addRequest :: ListenerId -> RequestBody /\ request -> Effect Unit
  -- ^ Saves request body until the request is fulfilled. The body is used
  --  to replay requests in case of a WebSocket failure.
  }

type SubmitTxListenerSet = ListenerSet (TxHash /\ CborBytes) Ogmios.SubmitTxR

mkAddMessageListener
  :: forall (response :: Type)
   . DecodeAeson response
  => Dispatcher
  -> ( ListenerId
       -> (Either DispatchError response -> Effect Unit)
       -> Effect Unit
     )
mkAddMessageListener dispatcher =
  \reflection handler ->
    flip Ref.modify_ dispatcher $
      Map.insert reflection \aeson -> handler $
        case (aesonObject (flip getFieldOptional "result") aeson) of
          Left err -> Left (JsonError err)
          Right (Just result) -> Right result
          Right Nothing -> Left (FaultError aeson)

mkRemoveMessageListener
  :: forall (requestData :: Type)
   . Dispatcher
  -> GenericPendingRequests requestData
  -> (ListenerId -> Effect Unit)
mkRemoveMessageListener dispatcher pendingRequests =
  \reflection -> do
    Ref.modify_ (Map.delete reflection) dispatcher
    Ref.modify_ (Map.delete reflection) pendingRequests

-- we manipluate closures to make the DispatchIdMap updateable using these
-- methods, this can be picked up by a query or cancellation function
mkListenerSet
  :: forall (request :: Type) (response :: Type)
   . DecodeAeson response
  => Dispatcher
  -> PendingRequests
  -> ListenerSet request response
mkListenerSet dispatcher pendingRequests =
  { addMessageListener:
      mkAddMessageListener dispatcher
  , removeMessageListener:
      mkRemoveMessageListener dispatcher pendingRequests
  , addRequest:
      \reflection (requestBody /\ _) ->
        Ref.modify_ (Map.insert reflection requestBody) pendingRequests
  }

mkSubmitTxListenerSet
  :: Dispatcher -> PendingSubmitTxRequests -> SubmitTxListenerSet
mkSubmitTxListenerSet dispatcher pendingRequests =
  { addMessageListener:
      mkAddMessageListener dispatcher
  , removeMessageListener:
      mkRemoveMessageListener dispatcher pendingRequests
  , addRequest:
      \reflection (requestBody /\ txHash /\ _) ->
        Ref.modify_ (Map.insert reflection (requestBody /\ txHash))
          pendingRequests
  }

-- | Builds an Ogmios request action using `QueryM`
mkOgmiosRequest
  :: forall (request :: Type) (response :: Type)
   . JsonWsp.JsonWspCall request response
  -> (OgmiosListeners -> ListenerSet request response)
  -> request
  -> QueryM response
mkOgmiosRequest jsonWspCall getLs inp = do
  listeners' <- asks $ listeners <<< _.ogmiosWs <<< _.runtime
  websocket <- asks $ underlyingWebSocket <<< _.ogmiosWs <<< _.runtime
  mkRequest listeners' websocket jsonWspCall getLs inp

-- | Builds an Ogmios request action using `Aff`
mkOgmiosRequestAff
  :: forall (request :: Type) (response :: Type)
   . OgmiosWebSocket
  -> Logger
  -> JsonWsp.JsonWspCall request response
  -> (OgmiosListeners -> ListenerSet request response)
  -> request
  -> Aff response
mkOgmiosRequestAff ogmiosWs = mkRequestAff
  (listeners ogmiosWs)
  (underlyingWebSocket ogmiosWs)

-- | Builds a Datum Cache request action using `QueryM`
mkDatumCacheRequest
  :: forall (request :: Type) (response :: Type)
   . JsonWsp.JsonWspCall request response
  -> (DatumCacheListeners -> ListenerSet request response)
  -> request
  -> QueryM response
mkDatumCacheRequest jsonWspCall getLs inp = do
  listeners' <- asks $ listeners <<< _.datumCacheWs <<< _.runtime
  websocket <- asks $ underlyingWebSocket <<< _.datumCacheWs <<< _.runtime
  mkRequest listeners' websocket jsonWspCall getLs inp

-- | Builds a Datum Cache request action using `Aff`
mkDatumCacheRequestAff
  :: forall (request :: Type) (response :: Type)
   . DatumCacheWebSocket
  -> Logger
  -> JsonWsp.JsonWspCall request response
  -> (DatumCacheListeners -> ListenerSet request response)
  -> request
  -> Aff response
mkDatumCacheRequestAff datumCacheWs = mkRequestAff
  (listeners datumCacheWs)
  (underlyingWebSocket datumCacheWs)

mkRequest
  :: forall (request :: Type) (response :: Type) (listeners :: Type)
   . listeners
  -> JsWebSocket
  -> JsonWsp.JsonWspCall request response
  -> (listeners -> ListenerSet request response)
  -> request
  -> QueryM response
mkRequest listeners' ws jsonWspCall getLs inp = do
  logger <- getLogger
  liftAff $ mkRequestAff listeners' ws logger jsonWspCall getLs inp

getLogger :: QueryM Logger
getLogger = do
  logLevel <- asks $ _.config >>> _.logLevel
  mbCustomLogger <- asks $ _.config >>> _.customLogger
  pure $ mkLogger logLevel mbCustomLogger

mkRequestAff
  :: forall (request :: Type) (response :: Type) (listeners :: Type)
   . listeners
  -> JsWebSocket
  -> Logger
  -> JsonWsp.JsonWspCall request response
  -> (listeners -> ListenerSet request response)
  -> request
  -> Aff response
mkRequestAff listeners' webSocket logger jsonWspCall getLs input = do
  { body, id } <-
    liftEffect $ JsonWsp.buildRequest jsonWspCall input
  let
    respLs :: ListenerSet request response
    respLs = getLs listeners'

    sBody :: RequestBody
    sBody = stringifyAeson body

    affFunc :: (Either Error response -> Effect Unit) -> Effect Canceler
    affFunc cont = do
      _ <- respLs.addMessageListener id
        ( \result -> do
            respLs.removeMessageListener id
            case result of
              Left (ListenerCancelled _) -> pure unit
              _ -> cont (lmap dispatchErrorToError result)
        )
      respLs.addRequest id (sBody /\ input)
      _wsSend webSocket (logger Debug) sBody
      -- Uncomment this code fragment to test `SubmitTx` request resend logic:
      -- let method = aesonObject (flip getFieldOptional "methodname") body
      -- when (method == Right (Just "SubmitTx")) do
      --   _wsReconnect webSocket
      pure $ Canceler $ \err -> do
        liftEffect $ respLs.removeMessageListener id
        liftEffect $ throwError $ err
  makeAff affFunc

-- an empty error we can compare to, useful for ensuring we've not received any other kind of error
defaultErr :: JsonDecodeError
defaultErr = TypeMismatch "default error"

defaultMessageListener
  :: Logger
  -> Array WebsocketDispatch
  -> String
  -> Effect Unit
defaultMessageListener logger dispatchArray msg = do
  aeson <- liftEither $ lmap (const $ error "Unable to parse response") $
    parseJsonStringToAeson msg
  -- here, we need to fold the input over the array of functions until we get
  -- a success, then execute the effect.
  -- using a fold instead of a traverse allows us to skip a bunch of execution
  eAction :: Either DispatchError (Effect Unit) <- foldl
    (messageFoldF aeson)
    (pure $ Left $ JsonError defaultErr)
    dispatchArray
  either
    -- we expect a lot of parse errors, some messages (could?) fall through completely
    ( \err ->
        unless
          ( case err of
              JsonError jsonErr -> jsonErr == defaultErr
              _ -> false
          )
          do
            logger Error $
              "unexpected error on input: " <> msg
                <> " Error:"
                <> show err
    )
    identity
    eAction

messageFoldF
  :: Aeson
  -> Effect (Either DispatchError (Effect Unit))
  -> (Aeson -> (Effect (Either DispatchError (Effect Unit))))
  -> Effect (Either DispatchError (Effect Unit))
messageFoldF msg acc' func = do
  acc <- acc'
  if isRight acc then acc' else func msg
