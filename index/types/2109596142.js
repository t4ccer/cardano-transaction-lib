// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2109596142"] = [{"values":[{"sourceSpan":{"start":[126,1],"name":".spago/unfoldable/v6.0.0/src/Data/Unfoldable1.purs","end":[126,69]},"score":13,"packageInfo":{"values":["unfoldable"],"tag":"Package"},"name":"iterateN","moduleName":"Data.Unfoldable1","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable1"],"Unfoldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `Unfoldable1` by repeated application of a function to a seed value.\nFor example:\n\n``` purescript\n(iterateN 5 (_ + 1) 0 :: Array Int) == [0, 1, 2, 3, 4]\n(iterateN 5 (_ + 1) 0 :: NonEmptyArray Int) == NonEmptyArray [0, 1, 2, 3, 4]\n\n(iterateN 0 (_ + 1) 0 :: Array Int) == [0]\n(iterateN 0 (_ + 1) 0 :: NonEmptyArray Int) == NonEmptyArray [0]\n```\n"}],"tag":"SearchResult"}]