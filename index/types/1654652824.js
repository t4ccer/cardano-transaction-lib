// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1654652824"] = [{"values":[{"sourceSpan":{"start":[367,1],"name":".spago/variant/v8.0.0/src/Data/Functor/Variant.purs","end":[381,22]},"score":2,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"traverse","moduleName":"Data.Functor.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["rl",{"tag":"ForAll","contents":["rlo",{"tag":"ForAll","contents":["ri",{"tag":"ForAll","contents":["ro",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r3",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"r"},{"tag":"TypeVar","contents":"rl"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Variant","Internal"],"VariantFTraverseCases"],"constraintArgs":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"rl"},{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"ro"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","RowList"],"RowToList"],"constraintArgs":[{"tag":"TypeVar","contents":"ro"},{"tag":"TypeVar","contents":"rlo"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Variant","Internal"],"VariantTags"],"constraintArgs":[{"tag":"TypeVar","contents":"rlo"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor","Variant"],"VariantFMaps"],"constraintArgs":[{"tag":"TypeVar","contents":"rlo"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"ri"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r1"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Union"],"constraintArgs":[{"tag":"TypeVar","contents":"ro"},{"tag":"TypeVar","contents":"r2"},{"tag":"TypeVar","contents":"r3"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r2"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r1"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Variant"],"VariantF"]},{"tag":"TypeVar","contents":"r3"}]},{"tag":"TypeVar","contents":"b"}]}}]}]}]}]}]}]}]}]}]}]}]}]}]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Traverse over some labels (with access to the containers) and use\n`traverse f` for the rest (just changing the index type).\n\n`traverse r f` is like `(traverse f >>> expand) # traverseSome r` but with\na more easily solved constraint (i.e. it can be solved once the type of\n`r` is known).\n"}],"tag":"SearchResult"}]