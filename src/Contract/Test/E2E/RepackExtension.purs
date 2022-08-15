module Contract.Test.E2E.RepackExtension (main) where

import Prelude

import Contract.Test.E2E
  ( TestOptions(..)
  , WalletExt(NamiExt)
  , parseOptions
  , withBrowser
  )

import Control.Monad.Error.Class (try)
import Control.Promise (Promise, toAffE)
import Data.Functor (void)
import Data.Maybe (Maybe(Just, Nothing), fromMaybe)
import Data.Newtype (wrap)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_, delay)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Node.FS.Sync (link, unlink)
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
  options <- execParser $ info optParser fullDesc

  let
    realTarget = options.target
    extVersion = "1.10.11_0"
    extBase =
      "/home/mike/snap/chromium/common/chromium/Default/Extensions/iifeegfcfhlhhnilhfoeihllenamcfgc"
    extDir = extBase <> "/" <> extVersion
    tgtFile = extBase <> "/" <> extVersion <> "." <> "crx"
    keyFile = extBase <> "/" <> extVersion <> "." <> "pem"
    RepackOptions { extensionDir, target, chromeExe, chromeUserDataDir } =
      RepackOptions
        { chromeExe: Nothing
        , extensionDir: extDir
        -- this seems to have no effect
        , target: tgtFile
        , chromeUserDataDir: Nothing
        }

  void $ try $ liftEffect $ unlink tgtFile
  void $ try $ liftEffect $ unlink keyFile

  browser <- Toppokki.launch
    { args:
        [ "--disable-extensions-except=" <> extensionDir
        , "--load-extension=" <> extensionDir
        , "--no-sandbox"
        , "--disable-setuid-sandbox"
        ]
    , headless: false
    , userDataDir: fromMaybe "" chromeUserDataDir
    , executablePath: "/snap/bin/chromium"
    }

  repackExtension browser extensionDir
  delay $ wrap $ 1000.0
  Toppokki.close browser

  liftEffect $ log $ " link " <> tgtFile <> " -> " <> realTarget

  liftEffect do
    link tgtFile realTarget
    unlink tgtFile

