module Ctl.Internal.Service.Blockfrost
  ( BlockfrostServiceM
  , BlockfrostServiceParams
  , runBlockfrostServiceM
  , getDatumByHash
  , getScriptByHash
  ) where

import Prelude

import Aeson
  ( class DecodeAeson
  , JsonDecodeError(TypeMismatch, AtKey, MissingValue)
  , decodeAeson
  , getFieldOptional
  , isNull
  , parseJsonStringToAeson
  )
import Affjax (Error, Response, URL, defaultRequest, request) as Affjax
import Affjax.RequestBody (RequestBody) as Affjax
import Affjax.RequestHeader (RequestHeader(ContentType, RequestHeader)) as Affjax
import Affjax.ResponseFormat (string) as Affjax.ResponseFormat
import Affjax.StatusCode (StatusCode(StatusCode)) as Affjax
import Control.Monad.Except.Trans (ExceptT(ExceptT), runExceptT)
import Control.Monad.Maybe.Trans (MaybeT(MaybeT), runMaybeT)
import Control.Monad.Reader.Class (ask)
import Control.Monad.Reader.Trans (ReaderT, runReaderT)
import Ctl.Internal.Cardano.Types.ScriptRef
  ( ScriptRef(NativeScriptRef, PlutusScriptRef)
  )
import Ctl.Internal.Contract.QueryBackend (BlockfrostBackend)
import Ctl.Internal.Deserialization.NativeScript (decodeNativeScript)
import Ctl.Internal.Deserialization.PlutusData (deserializeData)
import Ctl.Internal.Serialization.Hash (ScriptHash, scriptHashToBytes)
import Ctl.Internal.ServerConfig (ServerConfig, mkHttpUrl)
import Ctl.Internal.Service.Error
  ( ClientError(ClientHttpError, ClientHttpResponseError, ClientDecodeJsonError)
  , ServiceError(ServiceBlockfrostError)
  )
import Ctl.Internal.Service.Helpers (aesonObject, aesonString)
import Ctl.Internal.Types.ByteArray (ByteArray, byteArrayToHex)
import Ctl.Internal.Types.CborBytes (CborBytes)
import Ctl.Internal.Types.Datum (DataHash(DataHash), Datum)
import Ctl.Internal.Types.RawBytes (rawBytesToHex)
import Ctl.Internal.Types.Scripts (plutusV1Script, plutusV2Script)
import Data.Bifunctor (lmap)
import Data.Either (Either(Left, Right), note)
import Data.Generic.Rep (class Generic)
import Data.HTTP.Method (Method(GET, POST))
import Data.Maybe (Maybe(Nothing, Just), maybe)
import Data.MediaType (MediaType)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Show.Generic (genericShow)
import Effect.Aff (Aff)
import Effect.Aff.Class (liftAff)

--------------------------------------------------------------------------------
-- BlockfrostServiceM
--------------------------------------------------------------------------------

type BlockfrostServiceParams =
  { blockfrostConfig :: ServerConfig
  , blockfrostApiKey :: Maybe String
  }

type BlockfrostServiceM (a :: Type) = ReaderT BlockfrostServiceParams Aff a

runBlockfrostServiceM
  :: forall (a :: Type). BlockfrostBackend -> BlockfrostServiceM a -> Aff a
runBlockfrostServiceM backend = flip runReaderT serviceParams
  where
  serviceParams :: BlockfrostServiceParams
  serviceParams =
    { blockfrostConfig: backend.blockfrostConfig
    , blockfrostApiKey: backend.blockfrostApiKey
    }

--------------------------------------------------------------------------------
-- Making requests to Blockfrost endpoints
--------------------------------------------------------------------------------

data BlockfrostEndpoint
  -- /scripts/datum/{datum_hash}/cbor
  = GetDatumCbor DataHash
  -- /scripts/{script_hash}
  | GetScriptInfo ScriptHash
  -- /scripts/{script_hash}/cbor
  | GetScriptCbor ScriptHash

realizeEndpoint :: BlockfrostEndpoint -> Affjax.URL
realizeEndpoint endpoint =
  case endpoint of
    GetDatumCbor (DataHash hashBytes) ->
      "/scripts/datum/" <> byteArrayToHex hashBytes <> "/cbor"
    GetScriptInfo scriptHash ->
      "/scripts/" <> rawBytesToHex (scriptHashToBytes scriptHash)
    GetScriptCbor scriptHash ->
      "/scripts/" <> rawBytesToHex (scriptHashToBytes scriptHash) <> "/cbor"

blockfrostGetRequest
  :: BlockfrostEndpoint
  -> BlockfrostServiceM (Either Affjax.Error (Affjax.Response String))
blockfrostGetRequest endpoint = ask >>= \params -> liftAff do
  Affjax.request $ Affjax.defaultRequest
    { method = Left GET
    , url = mkHttpUrl params.blockfrostConfig <> realizeEndpoint endpoint
    , responseFormat = Affjax.ResponseFormat.string
    , headers =
        maybe mempty (\apiKey -> [ Affjax.RequestHeader "project_id" apiKey ])
          params.blockfrostApiKey
    }

blockfrostPostRequest
  :: BlockfrostEndpoint
  -> MediaType
  -> Maybe Affjax.RequestBody
  -> BlockfrostServiceM (Either Affjax.Error (Affjax.Response String))
blockfrostPostRequest endpoint mediaType mbContent =
  ask >>= \params -> liftAff do
    Affjax.request $ Affjax.defaultRequest
      { method = Left POST
      , url = mkHttpUrl params.blockfrostConfig <> realizeEndpoint endpoint
      , content = mbContent
      , responseFormat = Affjax.ResponseFormat.string
      , headers =
          [ Affjax.ContentType mediaType ] <>
            maybe mempty
              (\apiKey -> [ Affjax.RequestHeader "project_id" apiKey ])
              params.blockfrostApiKey
      }

--------------------------------------------------------------------------------
-- Blockfrost response handling
--------------------------------------------------------------------------------

handleBlockfrostResponse
  :: forall (result :: Type)
   . DecodeAeson result
  => Either Affjax.Error (Affjax.Response String)
  -> Either ClientError result
handleBlockfrostResponse (Left affjaxError) =
  Left (ClientHttpError affjaxError)
handleBlockfrostResponse (Right { status: Affjax.StatusCode statusCode, body })
  | statusCode < 200 || statusCode > 299 = do
      blockfrostError <-
        body # lmap (ClientDecodeJsonError body)
          <<< (decodeAeson <=< parseJsonStringToAeson)
      Left $ ClientHttpResponseError (wrap statusCode) $
        ServiceBlockfrostError blockfrostError
  | otherwise =
      body # lmap (ClientDecodeJsonError body)
        <<< (decodeAeson <=< parseJsonStringToAeson)

handle404AsNothing
  :: forall x. Either ClientError (Maybe x) -> Either ClientError (Maybe x)
handle404AsNothing (Left (ClientHttpResponseError (Affjax.StatusCode 404) _)) =
  Right Nothing
handle404AsNothing x = x

getDatumByHash
  :: DataHash -> BlockfrostServiceM (Either ClientError (Maybe Datum))
getDatumByHash dataHash = do
  response <- blockfrostGetRequest (GetDatumCbor dataHash)
  pure $ handle404AsNothing $ unwrapBlockfrostDatum <$> handleBlockfrostResponse
    response

getScriptInfo
  :: ScriptHash
  -> BlockfrostServiceM (Either ClientError (Maybe BlockfrostScriptInfo))
getScriptInfo scriptHash = do
  response <- blockfrostGetRequest (GetScriptInfo scriptHash)
  pure $ handle404AsNothing $ handleBlockfrostResponse response

getScriptByHash
  :: ScriptHash -> BlockfrostServiceM (Either ClientError (Maybe ScriptRef))
getScriptByHash scriptHash = runExceptT $ runMaybeT do
  info <- MaybeT $ ExceptT $ getScriptInfo scriptHash
  cbor <- MaybeT $ ExceptT $ do
    response <- blockfrostGetRequest (GetScriptCbor scriptHash)
    pure $ handle404AsNothing $ unwrapBlockfrostCbor <$>
      handleBlockfrostResponse response
  let
    script = lmap (ClientDecodeJsonError "Error decoding script") $
      wrapScriptType (scriptInfoType info) cbor
  MaybeT $ ExceptT $ pure $ Just <$> script
  where
  wrapScriptType scriptType x = case scriptType of
    NativeScript -> NativeScriptRef <$> decodeNativeScript x
    PlutusV1Script -> pure $ PlutusScriptRef $ plutusV1Script x
    PlutusV2Script -> pure $ PlutusScriptRef $ plutusV2Script x

--------------------------------------------------------------------------------
-- `getDatumByHash` response parsing
--------------------------------------------------------------------------------

newtype BlockfrostDatum = BlockfrostDatum (Maybe Datum)

derive instance Newtype BlockfrostDatum _

unwrapBlockfrostDatum :: BlockfrostDatum -> Maybe Datum
unwrapBlockfrostDatum = unwrap

instance DecodeAeson BlockfrostDatum where
  decodeAeson aeson
    | isNull aeson = pure $ BlockfrostDatum Nothing
    | otherwise = do
        cbor <- aesonObject (flip getFieldOptional "cbor") aeson
        pure $ BlockfrostDatum $ deserializeData =<< cbor

--------------------------------------------------------------------------------
-- `getScriptByHash` response parsing
--------------------------------------------------------------------------------

data BlockfrostScriptLanguage = NativeScript | PlutusV1Script | PlutusV2Script

derive instance Generic BlockfrostScriptLanguage _

instance Show BlockfrostScriptLanguage where
  show = genericShow

instance DecodeAeson BlockfrostScriptLanguage where
  decodeAeson = aesonString $ case _ of
    "native" -> pure NativeScript
    "plutusV1" -> pure PlutusV1Script
    "plutusV2" -> pure PlutusV2Script
    invalid ->
      Left $ TypeMismatch $
        "language: expected 'native' or 'plutusV{1|2}', got: " <> invalid

-- Do not parse fields other than `type`, cuz we do not need them yet
data BlockfrostScriptInfo = BlockfrostScriptInfo
  { type :: BlockfrostScriptLanguage }

instance DecodeAeson BlockfrostScriptInfo where
  decodeAeson aeson = do
    mType <- aesonObject (flip getFieldOptional "type") aeson
    type_ <- note (AtKey "type" MissingValue) mType
    pure $ BlockfrostScriptInfo { type: type_ }

scriptInfoType :: BlockfrostScriptInfo -> BlockfrostScriptLanguage
scriptInfoType (BlockfrostScriptInfo info) = info.type

newtype BlockfrostCbor = BlockfrostCbor (Maybe ByteArray)

derive instance Newtype BlockfrostCbor _

unwrapBlockfrostCbor :: BlockfrostCbor -> Maybe ByteArray
unwrapBlockfrostCbor = unwrap

instance DecodeAeson BlockfrostCbor where
  decodeAeson aeson
    | isNull aeson = pure $ BlockfrostCbor Nothing
    | otherwise = do
        cbor <- aesonObject (flip getFieldOptional "cbor") aeson
        pure $ BlockfrostCbor cbor
