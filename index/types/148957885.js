// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["148957885"] = [{"values":[{"sourceSpan":{"start":[402,1],"name":".spago/arrays/v7.1.0/src/Data/Array/NonEmpty.purs","end":[402,83]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"transpose'","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`transpose`' is identical to `transpose` other than that the inner arrays are each\na standard `Array` and not a `NonEmptyArray`. However, the result is wrapped in a \n`Maybe` to cater for the case where the inner `Array` is empty and must return `Nothing`.\n"}],"tag":"SearchResult"}]