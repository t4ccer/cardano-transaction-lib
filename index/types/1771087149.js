// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1771087149"] = [{"values":[{"sourceSpan":{"start":[187,1],"name":"src/Internal/Contract/Monad.purs","end":[203,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"ContractEnv","moduleName":"Ctl.Internal.Contract.Monad","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["backend",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryBackend"],"QueryBackend"]},{"tag":"RCons","contents":["handle",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"QueryHandle"]},{"tag":"RCons","contents":["networkId",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Address"],"NetworkId"]},{"tag":"RCons","contents":["logLevel",{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]},{"tag":"RCons","contents":["customLogger",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Level"],"LogLevel"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Log","Message"],"Message"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}]},{"tag":"RCons","contents":["suppressLogs",{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]},{"tag":"RCons","contents":["hooks",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Hooks"],"Hooks"]},{"tag":"RCons","contents":["wallet",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet"],"Wallet"]}]},{"tag":"RCons","contents":["usedTxOuts",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","UsedTxOuts"],"UsedTxOuts"]},{"tag":"RCons","contents":["ledgerConstants",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"LedgerConstants"]},{"tag":"RCons","contents":["timeParams",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"ContractTimeParams"]},{"tag":"RCons","contents":["synchronizationParams",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"ContractSynchronizationParams"]},{"tag":"RCons","contents":["knownTxs",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["backend",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Ref"],"Ref"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Transaction"],"TransactionHash"]}]}}]},{"tag":"REmpty","contents":{}}]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A record containing `Contract` environment - everything a `Contract` needs\nto run. It is recommended to use one environment per application to save\non websocket connections and to keep track of `UsedTxOuts`.\n"}],"tag":"SearchResult"}]