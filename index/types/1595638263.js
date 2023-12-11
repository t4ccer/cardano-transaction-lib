// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1595638263"] = [{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/foreign-object/v3.0.0/src/Foreign/Object.purs","end":[218,73]},"score":9,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"fromFoldable","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `Object a` from a foldable collection of key/value pairs\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[102,1],"name":"src/Contract/Monad.purs","end":[106,16]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"liftedE","moduleName":"Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `liftedE` except it directly throws the showable error via\n`throwContractError` instead of an arbitrary string.\n"}],"tag":"SearchResult"}]