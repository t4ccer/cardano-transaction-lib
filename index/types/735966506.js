// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["735966506"] = [{"values":[{"sourceSpan":{"start":[116,1],"name":".spago/record/v3.0.0/src/Record/Builder.purs","end":[121,37]},"score":6,"packageInfo":{"values":["record"],"tag":"Package"},"name":"merge","moduleName":"Record.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ForAll","contents":["r4",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Nub"],"constraintArgs":[{"tag":"TypeVar","contents":"r3"},{"tag":"TypeVar","contents":"r4"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Record","Builder"],"Builder"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r4"}]}}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Build by merging existing fields from another record, taking precedence\nin the case of overlaps.\n\nFor example:\n\n```purescript\nbuild (merge { x: 1, y: \"y\" }) { y: 2, z: true }\n :: { x :: Int, y :: String, z :: Boolean }\n```\n"}],"tag":"SearchResult"}]