module Test.BalanceTx.Collateral (suite) where

import Prelude

import BalanceTx.Collateral
  ( getMaxCollateralInputs
  , minRequiredCollateral
  , selectCollateral
  )
import BalanceTx.Helpers (fakeOutputWithValue)
import Cardano.Types.Transaction (TransactionOutput, Utxos)
import Cardano.Types.TransactionUnspentOutput (TransactionUnspentOutput)
import Cardano.Types.Value (Coin(Coin), Value(Value))
import Cardano.Types.Value (lovelaceValueOf, mkSingletonNonAdaAsset) as Value
import Data.BigInt (fromInt) as BigInt
import Data.List (singleton) as List
import Data.Map (Map)
import Data.Map (fromFoldable) as Map
import Data.Maybe (Maybe(Just, Nothing))
import Data.Newtype (wrap, unwrap)
import Data.Tuple (Tuple(Tuple))
import Data.Tuple.Nested (type (/\), (/\))
import Data.UInt (UInt)
import Data.UInt (fromInt) as UInt
import Effect.Aff (Aff)
import Mote (group, test)
import QueryM (QueryM, runQueryM, traceQueryConfig)
import Test.Fixtures (currencySymbol1, tokenName1, tokenName2, txInputFixture1)
import Test.Spec.Assertions (shouldEqual)
import Test.Utils (measure) as TestUtils
import TestM (TestPlanM)
import Types.Transaction (TransactionHash, TransactionInput)

suite :: TestPlanM Unit
suite = do
  group "BalanceTx.Collateral" do
    group "selectCollateral" do
      test "Prefers a single Ada-only inp if it covers minRequiredCollateral" do
        withMaxCollateralInputs $ \maxCollateralInputs -> do
          collateral <- selectCollateral maxCollateralInputs utxosFixture1
          collateral `shouldEqual`
            Just (List.singleton $ txUnspentOut zero adaOnlyTxOutputFixtureSuf)

withMaxCollateralInputs :: (Int -> QueryM Unit) -> Aff Unit
withMaxCollateralInputs test =
  TestUtils.measure $
    traceQueryConfig >>= flip runQueryM (getMaxCollateralInputs >>= test)

-- | Ada-only tx output sufficient to cover `minRequiredCollateral`.
adaOnlyTxOutputFixtureSuf :: TransactionOutput
adaOnlyTxOutputFixtureSuf =
  fakeOutputWithValue $
    Value.lovelaceValueOf (minRequiredCollateral + one)

-- | Ada-only tx output insufficient to cover `minRequiredCollateral`.
adaOnlyTxOutputFixtureInsuf :: TransactionOutput
adaOnlyTxOutputFixtureInsuf =
  fakeOutputWithValue $
    Value.lovelaceValueOf (minRequiredCollateral / BigInt.fromInt 2)

-- | Single-asset tx output sufficient to cover `minRequiredCollateral`.
singleAssetTxOutputFixtureSuf :: TransactionOutput
singleAssetTxOutputFixtureSuf =
  fakeOutputWithValue
    $ Value (Coin $ minRequiredCollateral + one)
    $ Value.mkSingletonNonAdaAsset currencySymbol1 tokenName1 one

utxosFixture1 :: Utxos
utxosFixture1 =
  Map.fromFoldable
    [ utxo zero adaOnlyTxOutputFixtureSuf
    , utxo one adaOnlyTxOutputFixtureInsuf
    , utxo 2 singleAssetTxOutputFixtureSuf
    ]

-- | Constructs an utxo with given tx output and its index.
utxo :: Int -> TransactionOutput -> TransactionInput /\ TransactionOutput
utxo index = utxo' (UInt.fromInt index)

utxo' :: UInt -> TransactionOutput -> TransactionInput /\ TransactionOutput
utxo' index = Tuple (wrap { transactionId, index })

-- | Constructs a `TransactionUnspentOutput` with given tx output and its index.
txUnspentOut :: Int -> TransactionOutput -> TransactionUnspentOutput
txUnspentOut index =
  utxo index >>> \(input /\ output) -> wrap { input, output }

transactionId :: TransactionHash
transactionId = _.transactionId (unwrap txInputFixture1)