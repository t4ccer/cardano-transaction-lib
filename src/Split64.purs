module Split64 where

import Effect
import Effect.Class.Console
import Prelude

import Control.Alternative (guard)
import Data.Foldable (fold, for_)
import Data.List (List(..), reverse, toUnfoldable, (:))
import Data.Maybe (fromMaybe)
import Data.Newtype (wrap)
import Data.String (Pattern(..), stripSuffix)
import Data.TextEncoder (encodeUtf8)
import Node.Encoding (Encoding(..))
import Node.FS.Sync (readTextFile)
import Types.ByteArray (ByteArray, byteLength, subarray)

main :: Effect Unit
main = do
  str <- roundtrip <$> readTextFile UTF8 "utf8.txt"
  logShow (isValidUtf8 str)
  logShow ((fold $ split64 str) == str)

-- | https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
-- | Added by `decodeUtf8` when decoding to replace malformed data
replacement :: String
replacement = "�"

foreign import decodeUtf8 :: ByteArray -> { result :: String, error :: Boolean }

isValidUtf8 :: String -> Boolean
isValidUtf8 = not <<< _.error <<< decodeUtf8 <<< wrap <<< encodeUtf8

roundtrip :: String -> String
roundtrip = _.result <<< decodeUtf8 <<< wrap <<< encodeUtf8

-- | `String` must be a valid unicode string
split64 :: String -> Array String
split64 = toUnfoldable <<< reverse <<< go Nil <<< wrap <<< encodeUtf8
  where
  go :: List String -> ByteArray -> List String
  go acc view | byteLength view <= 64 = (decodeUtf8 view).result : acc
  go acc view =
    let
      { result, error } = decodeUtf8 (subarray 0 64 view)
      { str, length } = fromMaybe { str: result, length: 64 } do
        -- Don't strip the suffix if there was no error, it is valid to end
        -- with a replacement character
        guard error
        str <- stripSuffix (Pattern replacement) result
        let length = byteLength $ wrap $ encodeUtf8 str
        pure { str, length }
    in
      go (str : acc) (subarray length (byteLength view) view)
