// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1647047437"] = [{"values":[{"sourceSpan":{"start":[274,1],"name":".spago/maybe/v6.0.0/src/Data/Maybe.purs","end":[274,52]},"score":55,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"fromMaybe'","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to `fromMaybe` but for use in cases where the default value may be\nexpensive to compute. As PureScript is not lazy, the standard `fromMaybe`\nhas to evaluate the default value before returning the result, whereas here\nthe value is only computed when the `Maybe` is known to be `Nothing`.\n\n``` purescript\nfromMaybe' (\\_ -> x) Nothing == x\nfromMaybe' (\\_ -> x) (Just y) == y\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1291,1],"name":".spago/arrays/v7.1.0/src/Data/Array.purs","end":[1291,69]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"all","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns true if all the array elements satisfy the given predicate.\niterating the array only as necessary and stopping as soon as the predicate\nyields false.\n\n```purescript\nall (_ > 0) [] = True\nall (_ > 0) [1, 2, 3] = True\nall (_ > 0) [-1, -2, -3] = False\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1280,1],"name":".spago/arrays/v7.1.0/src/Data/Array.purs","end":[1280,69]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"any","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns true if at least one array element satisfies the given predicate,\niterating the array only as necessary and stopping as soon as the predicate\nyields true.\n\n```purescript\nany (_ > 0) [] = False\nany (_ > 0) [-1, 0, 1] = True\nany (_ > 0) [-1, -2, -3] = False\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[584,1],"name":".spago/arrays/v7.1.0/src/Data/Array/NonEmpty.purs","end":[584,62]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"all","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[581,1],"name":".spago/arrays/v7.1.0/src/Data/Array/NonEmpty.purs","end":[581,62]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"any","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[92,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[92,63]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeSet","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[89,68]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeForeignObject","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[86,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[86,54]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeList","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[83,56]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeArray","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[77,70]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeNonEmptyList","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[71,72]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeNonEmptyArray","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[30,56]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeMaybe","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Encoders.purs","end":[27,62]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeIdentity","moduleName":"Data.Argonaut.Encode.Encoders","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Identity"],"Identity"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]