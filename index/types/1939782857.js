// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1939782857"] = [{"values":[{"sourceSpan":{"start":[342,1],"name":".spago/pipes/v7.0.1/src/Pipes/Prelude.purs","end":[342,62]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"null","moduleName":"Pipes.Prelude","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","Core"],"Producer"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Determine if a `Producer` is empty\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[318,1],"name":".spago/pipes/v7.0.1/src/Pipes/Prelude.purs","end":[318,60]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"length","moduleName":"Pipes.Prelude","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Pipes","Core"],"Producer"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Count the number of elements in a `Producer`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":"src/Error.purs","end":[50,13]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"traceAndHushAll_","moduleName":"Error","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Debug"],"DebugWarning"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Checked"],"ExceptV"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeConstructor","contents":[["Data","Identity"],"Identity"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Allows hush errors tracing as debug outputs.\nFor use when error hadling is not yet supported at a call site.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/profunctor/v5.0.0/src/Data/Profunctor/Split.purs","end":[35,60]},"score":4,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"lowerSplit","moduleName":"Data.Profunctor.Split","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Invariant"],"Invariant"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Profunctor","Split"],"Split"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/checked-exceptions/v3.1.1/src/Control/Monad/Except/Checked.purs","end":[53,8]},"score":0,"packageInfo":{"values":["checked-exceptions"],"tag":"Package"},"name":"safe","moduleName":"Control.Monad.Except.Checked","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Checked"],"ExceptV"]},{"tag":"REmpty","contents":{}}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Safely removes the `ExceptT` layer when all exceptions have been handled.\n"}],"tag":"SearchResult"}]