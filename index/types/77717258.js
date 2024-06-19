// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["77717258"] = [{"values":[{"sourceSpan":{"start":[38,1],"name":"src/Internal/Contract/QueryHandle/Type.purs","end":[59,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"QueryHandle","moduleName":"Ctl.Internal.Contract.QueryHandle.Type","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["getDatumByHash",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","DataHash"],"DataHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","PlutusData"],"PlutusData"]}]}}]}]},{"tag":"RCons","contents":["getScriptByHash",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","ScriptHash"],"ScriptHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","ScriptRef"],"ScriptRef"]}]}}]}]},{"tag":"RCons","contents":["getTxMetadata",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionHash"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Error"],"GetTxMetadataError"]}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","GeneralTransactionMetadata"],"GeneralTransactionMetadata"]}]}}]}]},{"tag":"RCons","contents":["getUtxoByOref",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionInput"],"TransactionInput"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionOutput"],"TransactionOutput"]}]}}]}]},{"tag":"RCons","contents":["getOutputAddressesByTxHash",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionHash"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]}}]}]},{"tag":"RCons","contents":["doesTxExist",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionHash"],"TransactionHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"RCons","contents":["utxosAt",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","UtxoMap"],"UtxoMap"]}]}]},{"tag":"RCons","contents":["getChainTip",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Chain"],"Tip"]}]},{"tag":"RCons","contents":["getCurrentEpoch",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"CurrentEpoch"]}]},{"tag":"RCons","contents":["submitTx",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionHash"],"TransactionHash"]}]}]},{"tag":"RCons","contents":["evaluateTx",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"AdditionalUtxoSet"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"TxEvaluationR"]}]}]}]},{"tag":"RCons","contents":["getEraSummaries",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","EraSummaries"],"EraSummaries"]}]},{"tag":"RCons","contents":["getPoolIds",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","PoolPubKeyHash"],"PoolPubKeyHash"]}]}}]},{"tag":"RCons","contents":["getPubKeyHashDelegationsAndRewards",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","NetworkId"],"NetworkId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","StakePubKeyHash"],"StakePubKeyHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","DelegationsAndRewards"],"DelegationsAndRewards"]}]}}]}]}]},{"tag":"RCons","contents":["getValidatorHashDelegationsAndRewards",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","NetworkId"],"NetworkId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","ScriptHash"],"ScriptHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"AffE"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","DelegationsAndRewards"],"DelegationsAndRewards"]}]}}]}]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":null}],"tag":"SearchResult"}]