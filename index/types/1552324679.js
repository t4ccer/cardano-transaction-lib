// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1552324679"] = [{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/st/v6.2.0/src/Control/Monad/ST/Internal.purs","end":[89,56]},"score":6,"packageInfo":{"values":["st"],"tag":"Package"},"name":"run","moduleName":"Control.Monad.ST.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]},null]}}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run an `ST` computation.\n\nNote: the type of `run` uses a rank-2 type to constrain the phantom\ntype `r`, such that the computation must not leak any mutable references\nto the surrounding computation. It may cause problems to apply this\nfunction using the `$` operator. The recommended approach is to use\nparentheses instead.\n"}],"tag":"SearchResult"}]