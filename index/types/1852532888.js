// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1852532888"] = [{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/foreign/v6.0.1/src/Foreign/Index.purs","end":[49,65]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readIndex","moduleName":"Foreign.Index","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to read a value from a foreign value at the specified numeric index\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[45,1],"name":".spago/foreign/v6.0.1/src/Foreign/Index.purs","end":[45,67]},"score":9,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"readProp","moduleName":"Foreign.Index","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign"],"FT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to read a value from a foreign value property\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[578,1],"name":"src/Deserialization/Transaction.purs","end":[582,32]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertMetadatum","moduleName":"Deserialization.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Types"],"TransactionMetadatum"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Deserialization","Error"],"Err"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","TransactionMetadata"],"TransactionMetadatum"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/datetime/v5.0.2/src/Data/Time.purs","end":[74,63]},"score":8,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"adjust","moduleName":"Data.Time","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Days"]}]},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Adjusts a time value with a duration offset. The result includes a\nremainder value of the whole number of days involved in the adjustment,\nfor example, if a time of 23:00:00:00 has a duration of +2 hours added to\nit, the result will be 1 day, and 01:00:00:00. Correspondingly, if the\nduration is negative, a negative number of days may also be returned as\nthe remainder.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/argonaut-codecs/v8.1.0/src/Data/Argonaut/Encode/Combinators.purs","end":[23,68]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"assoc","moduleName":"Data.Argonaut.Encode.Combinators","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The named Encoders of the `(:=)` operator.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[567,1],"name":"src/Contract/Transaction.purs","end":[571,21]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"awaitTxConfirmedWithTimeoutSlots","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `awaitTxConfirmed`, but allows to specify a timeout in slots for waiting.\nThrows an exception on timeout.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[556,1],"name":"src/Contract/Transaction.purs","end":[560,21]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"awaitTxConfirmedWithTimeout","moduleName":"Contract.Transaction","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Seconds"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","Transaction"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Same as `awaitTxConfirmed`, but allows to specify a timeout in seconds for waiting.\nThrows an exception on timeout.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":"src/Contract/AuxiliaryData.purs","end":[52,39]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"setGeneralTxMetadata","moduleName":"Contract.AuxiliaryData","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","TransactionMetadata"],"GeneralTransactionMetadata"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":"src/Contract/AuxiliaryData.purs","end":[43,39]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"setAuxiliaryData","moduleName":"Contract.AuxiliaryData","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"AuxiliaryData"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeConstructor","contents":[["Types","ScriptLookups"],"UnattachedUnbalancedTx"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]