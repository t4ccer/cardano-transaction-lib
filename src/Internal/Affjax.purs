module Ctl.Internal.Affjax
  ( request
  ) where

import Prelude

import Affjax (AffjaxDriver)
import Affjax (Error, Request, Response) as Affjax
import Affjax (request) as Affjax
import Data.Either (Either)
import Effect.Aff (Aff)

foreign import driver :: AffjaxDriver

-- | Makes an HTTP request.
-- |
-- | The example below performs a `GET` request to the URL `/resource` and
-- | interprets the response body as JSON.
-- |
-- | ```purescript
-- | import Affjax.ResponseFormat (json)
-- | ...
-- | request (defaultRequest { url = "/resource", method = Left GET, responseFormat = json})
-- | ```
-- |
-- | For common cases helper functions can often be used insteAX of `request` .
-- | For instance, the above example is equivalent to the following.
-- |
-- | ```purescript
-- | get json "/resource"
-- | ```
request
  :: forall a. Affjax.Request a -> Aff (Either Affjax.Error (Affjax.Response a))
request = Affjax.request driver
