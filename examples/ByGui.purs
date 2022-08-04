module Examples.ByGui (main) where

import Prelude

import Affjax.RequestBody (document)
import Contract.Wallet (isGeroAvailable, isNamiAvailable)
import Data.Array (last)
import Data.Maybe (Maybe(Just))
import Data.String.Common (split)
import Data.String.Pattern (Pattern(Pattern))
import Effect (Effect)
import Effect.Class (liftEffect)
import Effect.Console (error, log)
import Examples.AlwaysMints as AlwaysMints
import Examples.AlwaysSucceeds as AlwaysSucceeds
import Examples.Datums as Datums
import Examples.Gero as Gero
import Examples.MintsMultipleTokens as MintsMultipleTokens
import Examples.Nami as Nami
import Examples.Pkh2Pkh as Pkh2Pkh
import Examples.Pkh2PkhGero as Pkh2PkhGero
import Examples.SignMultiple as SignMultiple
import Web.HTML.HTMLElement (offsetHeight)

foreign import _queryString :: Effect String
foreign import _createWalletOptions
  :: Array String -> (String -> Effect Unit) -> Effect Unit

main :: Effect Unit
main = do
  _createWalletOptions [ "Nami", "Gero", "Eternl" ] walletSelectHandler
  log "Listener setup"

walletSelectHandler :: String -> Effect Unit
walletSelectHandler walletName = do
  log ("Selected " <> walletName)
  case walletName of
    "Nami" -> ifM isNamiAvailable Nami.main (error "Nami not available")
    "Gero" -> ifM isGeroAvailable Gero.main (error "Gero not available")
    _ -> error "Empty wallet"
