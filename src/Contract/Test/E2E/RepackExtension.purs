module Contract.Test.E2E.RepackExtension (main) where

import Prelude

import Contract.Test.E2E
  ( TestOptions(..)
  , WalletExt(NamiExt)
  , byId
  , doJQ
  , injectJQueryAll
  , parseOptions
  , retrieveJQuery
  , withBrowser
  )
import Control.Monad.Error.Class (try)
import Control.Promise (Promise, toAffE)
import Data.Foldable (fold)
import Data.Functor (void)
import Data.Maybe (Maybe(Just, Nothing), fromMaybe)
import Data.Newtype (wrap)
import Effect (Effect)
import Effect.Aff (Aff, launchAff_, delay)
import Effect.Class (liftEffect)
import Effect.Class.Console (log)
import Foreign (unsafeFromForeign)
import Node.FS.Sync (link, unlink, realpath)
import Node.Path (FilePath)
import Options.Applicative
  ( Parser
  , execParser
  , help
  , long
  , metavar
  , option
  , showDefault
  , str
  , strOption
  , switch
  , value
  , info
  , fullDesc
  )
import Toppokki as Toppokki

foreign import _repackExtension
  :: Toppokki.Browser -> FilePath -> Effect (Promise Unit)

repackExtension :: Toppokki.Browser -> FilePath -> Aff Unit
repackExtension browser wallet = toAffE $ _repackExtension browser wallet

data RepackOptions = RepackOptions
  { chromeExe :: Maybe FilePath
  , target :: FilePath
  , chromeUserDataDir :: FilePath
  }

optParser :: Parser RepackOptions
optParser = ado
  chromeExe <- option (Just <$> str) $ fold
    [ long "chrome-exe"
    , metavar "FILE"
    , help "Chrome/-ium exe"
    , value Nothing
    ]
  target <- strOption $ fold
    [ long "target"
    , metavar "FILE"
    , help "Name of the CRX file to be written"
    ]
  chromeUserDataDir <- strOption $ fold
    [ long "chrome-user-data"
    , help "Chrome/-ium user data dir"
    , value ""
    , showDefault
    , metavar "DIR"
    ]
  in RepackOptions { chromeExe, target, chromeUserDataDir }

findUserDataDir :: Toppokki.Browser -> Aff FilePath
findUserDataDir browser = do
  page <- Toppokki.newPage browser
  Toppokki.goto (wrap "chrome://version") page
  map unsafeFromForeign $ Toppokki.unsafeEvaluateStringFunction
    "document.getElementById('profile_path').innerHTML"
    page

main :: Effect Unit
main = launchAff_ do

  RepackOptions { chromeExe, target, chromeUserDataDir } <- liftEffect
    $ execParser
    $ info optParser fullDesc

  log $ "start tki with " <> fromMaybe "" chromeExe
  browser <- Toppokki.launch
    { args:
        [ "--no-sandbox"
        , "--disable-setuid-sandbox"
        ]
    , headless: false
    , executablePath: fromMaybe "" chromeExe
    , userDataDir: chromeUserDataDir
    }

  userDataDir <- findUserDataDir browser
  log $ "userDataDir is " <> userDataDir

  let
    extVersion = "1.10.11_0"
    extBase =
      userDataDir <> "/Extensions/iifeegfcfhlhhnilhfoeihllenamcfgc"
    extDir = extBase <> "/" <> extVersion
    tgtFile = extBase <> "/" <> extVersion <> "." <> "crx"
    keyFile = extBase <> "/" <> extVersion <> "." <> "pem"

  fullPath <- liftEffect $ realpath extDir

  void $ liftEffect $ try $ unlink tgtFile
  void $ liftEffect $ try $ unlink keyFile

  repackExtension browser extDir
  delay $ wrap $ 1000.0
  Toppokki.close browser

  liftEffect $ log $ " link " <> tgtFile <> " -> " <> target

  liftEffect do
    link tgtFile target
    unlink tgtFile
