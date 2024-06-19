// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2061778575"] = [{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/prelude/v6.0.1/src/Data/Reflectable.purs","end":[49,94]},"score":91,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"reifyType","moduleName":"Data.Reflectable","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ForAll","contents":["r",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Reflectable"],"Reifiable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Reflectable"],"Reflectable"],"constraintArgs":[{"tag":"TypeVar","contents":"v"},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeVar","contents":"r"}]}]},null]}}]},{"tag":"TypeVar","contents":"r"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reify a value of type `t` such that it can be consumed by a\nfunction constrained by the `Reflectable` type class. For\nexample:\n\n```purs\ntwiceFromType :: forall v. Reflectable v Int => Proxy v -> Int\ntwiceFromType = (_ * 2) <<< reflectType\n\ntwiceOfTerm :: Int\ntwiceOfTerm = reifyType 21 twiceFromType\n```\n"}],"tag":"SearchResult"}]