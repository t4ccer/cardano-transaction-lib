module Contract.Test.E2E.RepackExtension (main) where

import Prelude

import Contract.Test.E2E
  ( TestOptions(..)
  , WalletExt(NamiExt)
  , parseOptions
  , withBrowser
  )
import Control.Promise (Promise, toAffE)
import Data.Maybe (Maybe(Just,Nothing), fromMaybe)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_)
import Effect.Class (liftEffect)
import Node.Path (FilePath)
import Toppokki as Toppokki

foreign import _repackExtension
  :: Toppokki.Browser -> FilePath -> Effect (Promise Unit)

repackExtension :: Toppokki.Browser -> FilePath -> Aff Unit
repackExtension browser wallet = toAffE $ _repackExtension browser wallet

data RepackOptions = RepackOptions
  { chromeExe :: Maybe FilePath
  , extensionDir :: FilePath
  , target :: FilePath
  , chromeUserDataDir :: Maybe FilePath
  }

main = launchAff_ do
  --  options <- execParser $ info optParser fullDesc
  let
    RepackOptions { extensionDir, target, chromeExe, chromeUserDataDir } =
      RepackOptions
        { chromeExe: Nothing
        , extensionDir:
            "/home/mike/.config/google-chrome/Default/Extensions/iifeegfcfhlhhnilhfoeihllenamcfgc/1.10.9_0"
        , target: "my.crx"
        , chromeUserDataDir: Nothing
        }
  browser <- Toppokki.launch
    { args:
        [ "--disable-extensions-except=" <> extensionDir
        , "--load-extension=" <> extensionDir
        , "--no-sandbox"
        , "--disable-setuid-sandbox"
        ]
    , headless: false
    , userDataDir: fromMaybe "" chromeUserDataDir
    , executablePath: "/usr/bin/google-chrome"
    }

  repackExtension browser extensionDir
  Toppokki.close browser
