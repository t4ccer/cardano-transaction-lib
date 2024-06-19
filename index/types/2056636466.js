// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2056636466"] = [{"values":[{"sourceSpan":{"start":[164,1],"name":".spago/lists/v7.0.0/src/Data/List/Lazy.purs","end":[164,62]},"score":19,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"replicateM","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Perform a monadic action `n` times collecting all of the results.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,1],"name":".spago/gen/v4.0.0/src/Control/Monad/Gen/Common.purs","end":[44,68]},"score":12,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"genMaybe'","moduleName":"Control.Monad.Gen.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs `Maybe` values, choosing a value from\nanother generator for the inner value, with an adjustable bias for how\noften `Just` is returned vs `Nothing`. A bias ≤ 0.0 will always\nreturn `Nothing`, a bias ≥ 1.0 will always return `Just`.\n"}],"tag":"SearchResult"}]