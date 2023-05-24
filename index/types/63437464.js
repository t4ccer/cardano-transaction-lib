// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63437464"] = [{"values":[{"sourceSpan":{"start":[30,1],"name":".spago/test-unit/v16.0.0/src/Test/Unit/QuickCheck.purs","end":[30,59]},"score":5,"packageInfo":{"values":["test-unit"],"tag":"Package"},"name":"quickCheck","moduleName":"Test.Unit.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeConstructor","contents":[["Test","Unit"],"Test"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/pipes/v7.0.1/src/Pipes/Internal.purs","end":[181,27]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"closed","moduleName":"Pipes.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Pipes","Internal"],"X"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/partial/v3.0.0/src/Partial.purs","end":[12,46]},"score":22,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"crashWith","moduleName":"Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A partial function which crashes on any input with the specified message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/partial/v3.0.0/src/Partial/Unsafe.purs","end":[23,41]},"score":22,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafeCrashWith","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function which crashes with the specified error message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[19,1],"name":".spago/partial/v3.0.0/src/Partial/Unsafe.purs","end":[19,47]},"score":22,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafePartial","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Discharge a partiality constraint, unsafely.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":".spago/node-process/v8.2.0/src/Node/Globals.purs","end":[21,54]},"score":3,"packageInfo":{"values":["node-process"],"tag":"Package"},"name":"unsafeRequire","moduleName":"Node.Globals","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Just calls `require`. You might also consider using the FFI instead. This\nfunction is, in general, horribly unsafe, and may perform side effects.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[97,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[97,44]},"score":10,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeFromForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely coerce a `Foreign` value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[93,1],"name":".spago/foreign/v6.0.1/src/Foreign.purs","end":[93,42]},"score":10,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeToForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Coerce any value to the a `Foreign` value.\n\nThis is considered unsafe as it's only intended to be used on primitive\nJavaScript types, rather than PureScript types. Exporting PureScript values\nvia the FFI can be dangerous as they can be mutated by code outside the\nPureScript program, resulting in difficult to diagnose problems elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/exceptions/v5.0.0/src/Effect/Exception/Unsafe.purs","end":[13,37]},"score":12,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrow","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Defined as `unsafeThrowException <<< error`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/exceptions/v5.0.0/src/Effect/Exception/Unsafe.purs","end":[9,45]},"score":12,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrowException","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throw an exception in pure code. This function should be used very\nsparingly, as it can cause unexpected crashes at runtime.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[131,1],"name":".spago/aff-retry/v1.2.1/src/Effect/Aff/Retry.purs","end":[131,54]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"constantDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicy"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Cconstant delay with unlimited retries\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/prelude/v5.0.1/src/Data/Void.purs","end":[36,30]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"absurd","moduleName":"Data.Void","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Void"],"Void"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Eliminator for the `Void` type.\nUseful for stating that some code branch is impossible because you've\n\"acquired\" a value of type `Void` (which you can't).\n\n```purescript\nrightOnly :: forall t . Either Void t -> t\nrightOnly (Left v) = absurd v\nrightOnly (Right t) = t\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[275,1],"name":".spago/variant/v7.0.3/src/Data/Variant/Internal.purs","end":[275,29]},"score":2,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"impossible","moduleName":"Data.Variant.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,3],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Sets.purs","end":[10,20]},"score":1,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"toInt","moduleName":"Data.Typelevel.Num.Sets","info":{"values":[{"typeClassArguments":[["n",null]],"typeClass":[["Data","Typelevel","Num","Sets"],"Nat"],"type":{"tag":"ForAll","contents":["n",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,3],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[46,25]},"score":1,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"toBool","moduleName":"Data.Typelevel.Bool","info":{"values":[{"typeClassArguments":[["b",null]],"typeClass":[["Data","Typelevel","Bool"],"BoolI"],"type":{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"BoolI"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[98,1],"name":".spago/datetime/v5.0.2/src/Data/Time/Duration.purs","end":[98,49]},"score":9,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"negateDuration","moduleName":"Data.Time.Duration","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Negates a duration, turning a positive duration negative or a negative\nduration positive.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[90,3],"name":".spago/datetime/v5.0.2/src/Data/Time/Duration.purs","end":[90,34]},"score":9,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"toDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,3],"name":".spago/datetime/v5.0.2/src/Data/Time/Duration.purs","end":[89,36]},"score":9,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"fromDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[18,3],"name":".spago/prelude/v5.0.1/src/Data/Show.purs","end":[18,22]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"show","moduleName":"Data.Show","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Show"],"Show"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/prelude/v5.0.1/src/Data/Show/Generic.purs","end":[15,30]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericShow'","moduleName":"Data.Show.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Show","Generic"],"GenericShow"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show","Generic"],"GenericShow"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[53,1],"name":".spago/prelude/v5.0.1/src/Data/Ring.purs","end":[53,37]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"negate","moduleName":"Data.Ring","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`negate x` can be used as a shorthand for `zero - x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[216,1],"name":".spago/prelude/v5.0.1/src/Data/Ord.purs","end":[216,46]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"signum","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The sign function; always evaluates to either `one` or `negate one`. For\nany `x`, we should have `signum x * abs x == x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[211,1],"name":".spago/prelude/v5.0.1/src/Data/Ord.purs","end":[211,43]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"abs","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The absolute value function. `abs x` is defined as `if x >= zero then x\nelse negate x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[44,3],"name":".spago/prelude/v5.0.1/src/Data/HeytingAlgebra.purs","end":[44,16]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"not","moduleName":"Data.HeytingAlgebra","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[14,3],"name":".spago/prelude/v5.0.1/src/Data/HeytingAlgebra/Generic.purs","end":[14,24]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericNot'","moduleName":"Data.HeytingAlgebra.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","HeytingAlgebra","Generic"],"GenericHeytingAlgebra"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra","Generic"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,3],"name":".spago/unordered-collections/v2.1.4/src/Data/Hashable.purs","end":[50,19]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"hash","moduleName":"Data.Hashable","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Hashable"],"Hashable"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,3],"name":".spago/prelude/v5.0.1/src/Data/EuclideanRing.purs","end":[64,21]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"degree","moduleName":"Data.EuclideanRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","EuclideanRing"],"EuclideanRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[306,1],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[306,48]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"defaultFromEnum","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provides a default implementation for `fromEnum`.\n\n- Assumes `toEnum 0 = Just bottom`.\n- Cannot be used in conjuction with `defaultPred`.\n\nRuns in `O(n)` where `n` is `fromEnum a`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,3],"name":".spago/enums/v5.0.0/src/Data/Enum.purs","end":[116,23]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"fromEnum","moduleName":"Data.Enum","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Enum"],"BoundedEnum"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"BoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,3],"name":".spago/enums/v5.0.0/src/Data/Enum/Generic.purs","end":[59,31]},"score":12,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericFromEnum'","moduleName":"Data.Enum.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,3],"name":".spago/prelude/v5.0.1/src/Data/DivisionRing.purs","end":[30,18]},"score":86,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"recip","moduleName":"Data.DivisionRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","DivisionRing"],"DivisionRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","DivisionRing"],"DivisionRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":".spago/bignumber/705923edd892a3397b90d28ce7db9a7181dcd599/src/Data/BigNumber.purs","end":[35,53]},"score":0,"packageInfo":{"values":["bignumber"],"tag":"Package"},"name":"isBigNumber","moduleName":"Data.BigNumber","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,3],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Encode/Class.purs","end":[27,26]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeJson","moduleName":"Data.Argonaut.Encode.Class","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[75,3],"name":"src/Internal/ToData.purs","end":[75,28]},"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toData","moduleName":"Ctl.Internal.ToData","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Ctl","Internal","ToData"],"ToData"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","ToData"],"ToData"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PlutusData"],"PlutusData"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[898,1],"name":"src/Internal/Serialization.purs","end":[898,64]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"serializeData","moduleName":"Ctl.Internal.Serialization","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","ToData"],"ToData"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","CborBytes"],"CborBytes"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":"src/Internal/Serialization/ToBytes.purs","end":[77,15]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toBytes","moduleName":"Ctl.Internal.Serialization.ToBytes","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","Castable"],"Castable"],"constraintArgs":[{"tag":"TypeVar","contents":"a"},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","ToBytes"],"SerializableData"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","CborBytes"],"CborBytes"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,3],"name":"src/Internal/Plutus/Types/Address.purs","end":[55,29]},"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getAddress","moduleName":"Ctl.Internal.Plutus.Types.Address","info":{"values":[{"typeClassArguments":[["t",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Ctl","Internal","Plutus","Types","Address"],"PlutusAddress"],"type":{"tag":"ForAll","contents":["t",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Plutus","Types","Address"],"PlutusAddress"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","Address"],"Address"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,3],"name":"src/Internal/Metadata/ToMetadata.purs","end":[29,42]},"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toMetadata","moduleName":"Ctl.Internal.Metadata.ToMetadata","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Ctl","Internal","Metadata","ToMetadata"],"ToMetadata"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Metadata","ToMetadata"],"ToMetadata"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TransactionMetadata"],"TransactionMetadatum"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":"src/Internal/Metadata/MetadataType.purs","end":[30,75]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toGeneralTxMetadata","moduleName":"Ctl.Internal.Metadata.MetadataType","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Metadata","MetadataType"],"MetadataType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TransactionMetadata"],"GeneralTransactionMetadata"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[613,1],"name":"src/Internal/Deserialization/Transaction.purs","end":[616,15]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertExUnits","moduleName":"Ctl.Internal.Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"ExUnits"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"ExUnits"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[141,3],"name":"src/Internal/Cardano/Types/Value.purs","end":[141,21]},"score":200000,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"negation","moduleName":"Ctl.Internal.Cardano.Types.Value","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Ctl","Internal","Cardano","Types","Value"],"Negate"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Cardano","Types","Value"],"Negate"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[766,3],"name":".spago/aeson/bfd8f4dcd0522a076320f9dc710c24817438e02e/src/Aeson.purs","end":[766,28]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"encodeAeson","moduleName":"Aeson","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Aeson"],"EncodeAeson"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"EncodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]