// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1477872172"] = [{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/web-file/v4.0.0/src/Web/File/Blob.purs","end":[34,47]},"score":3,"packageInfo":{"values":["web-file"],"tag":"Package"},"name":"fromArray","moduleName":"Web.File.Blob","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","MediaType"],"MediaType"]}]},{"tag":"TypeConstructor","contents":[["Web","File","Blob"],"Blob"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a Blob from an Array of strings with the given Mediatype\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[103,1],"name":".spago/node-buffer/v8.0.0/src/Node/Buffer/Immutable.purs","end":[103,59]},"score":7,"packageInfo":{"values":["node-buffer"],"tag":"Package"},"name":"concat'","moduleName":"Node.Buffer.Immutable","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeConstructor","contents":[["Node","Buffer","Immutable"],"ImmutableBuffer"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Concatenates a list of buffers, combining them into a new buffer of the\nspecified length.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5649,1],"name":".spago/unicode/v6.0.0/src/Data/CodePoint/Unicode/Internal.purs","end":[5649,42]},"score":1,"packageInfo":{"values":["unicode"],"tag":"Package"},"name":"checkAttrS","moduleName":"Data.CodePoint.Unicode.Internal","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5639,1],"name":".spago/unicode/v6.0.0/src/Data/CodePoint/Unicode/Internal.purs","end":[5639,41]},"score":1,"packageInfo":{"values":["unicode"],"tag":"Package"},"name":"checkAttr","moduleName":"Data.CodePoint.Unicode.Internal","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":"src/Internal/NativeScripts.purs","end":[74,63]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"getMaximumSigners","moduleName":"Ctl.Internal.NativeScripts","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Ed25519KeyHash"],"Ed25519KeyHash"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","NativeScript"],"NativeScript"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Used for fee calculation.\nWe try to calculate maximum number of signers from the script itself,\nfollowing its logic.\nBut we must not count `requiredSigners` as signers from native scripts\ntwice, because that would lead to excessive fees. Hence we accept a set\nof already known signers to be ignored in this function.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[50,1],"name":"src/Internal/BalanceTx/RedeemerIndex.purs","end":[50,64]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachRedeemers","moduleName":"Ctl.Internal.BalanceTx.RedeemerIndex","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Redeemer"],"Redeemer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,1],"name":"src/Internal/BalanceTx/RedeemerIndex.purs","end":[54,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"attachIndexedRedeemers","moduleName":"Ctl.Internal.BalanceTx.RedeemerIndex","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","RedeemerIndex"],"IndexedRedeemer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":"src/Internal/BalanceTx/Collateral.purs","end":[43,80]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"addTxCollateral","moduleName":"Ctl.Internal.BalanceTx.Collateral","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionUnspentOutput"],"TransactionUnspentOutput"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2588,1],"name":".spago/cardano-serialization-lib/26d437c3f398172c839b93b57c30eb43a7fa7ca0/src/Cardano/Serialization/Lib.purs","end":[2588,91]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"singleHostName_new","moduleName":"Cardano.Serialization.Lib","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"DNSRecordAorAAAA"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"SingleHostName"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,1],"name":".spago/ansi/v7.0.0/src/Ansi/Output.purs","end":[24,63]},"score":2,"packageInfo":{"values":["ansi"],"tag":"Package"},"name":"withGraphics","moduleName":"Ansi.Output","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"TypeConstructor","contents":[["Ansi","Codes"],"GraphicsParam"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Wrap the given text in escape codes corresponding to the given parameters.\nFor example:\n\n```purescript\nConsole.log $ withGraphics (bold <> underline <> foreground BrightRed) \"hello world\"\n```\n\nwould print \"hello world\" to the terminal, bold, underlined, and in bright\nred, and then reset (so that further logging to the console uses the\nnormal color and style).\n\nThis function simply wraps the given text in an escape code and a reset\ncode, so that it is a little more comfortable to use than the functions\nin `Ansi.Codes`.\n"}],"tag":"SearchResult"}]