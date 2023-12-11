// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1621017927"] = [{"values":[{"sourceSpan":{"start":[251,1],"name":".spago/stringutils/v0.0.11/src/Data/String/Utils.purs","end":[251,51]},"score":0,"packageInfo":{"values":["stringutils"],"tag":"Package"},"name":"mapChars","moduleName":"Data.String.Utils","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Return the string obtained by applying the mapping function to each\ncharacter (i.e. Unicode code point) of the input string.\nNote that this is probably not what you want as Unicode code points are\nnot necessarily the same as user-perceived characters (grapheme clusters).\nOnly use this function if you know what you are doing.\nThis function uses `String`s instead of `Char`s because PureScript\n`Char`s must be UTF-16 code units and hence cannot represent all Unicode\ncode points.\n\nExample:\n```purescript\n-- Mapping over what appears to be six characters...\nmapChars (const \"x\") \"Åström\" == \"xxxxxxxx\" -- See? Don't use this!\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[156,1],"name":".spago/stringutils/v0.0.11/src/Data/String/Utils.purs","end":[156,50]},"score":0,"packageInfo":{"values":["stringutils"],"tag":"Package"},"name":"filter","moduleName":"Data.String.Utils","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Keep only those characters that satisfy the predicate.\nThis function uses `String` instead of `Char` because PureScript\n`Char`s must be UTF-16 code units and hence cannot represent all Unicode\ncode points.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[292,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/CodeUnits.purs","end":[292,58]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"countPrefix","moduleName":"Data.String.NonEmpty.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the number of contiguous characters at the beginning of the string\nfor which the predicate holds.\n\n```purescript\ncountPrefix (_ /= 'o') (NonEmptyString \"Hello World\") == 4\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/CodePoints.purs","end":[129,63]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"countPrefix","moduleName":"Data.String.NonEmpty.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[296,1],"name":".spago/strings/v5.0.0/src/Data/String/CodeUnits.purs","end":[296,51]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"dropWhile","moduleName":"Data.String.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the suffix remaining after `takeWhile`.\n\n```purescript\ndropWhile (_ /= '.') \"Test.purs\" == \".purs\"\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[270,1],"name":".spago/strings/v5.0.0/src/Data/String/CodeUnits.purs","end":[270,51]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"takeWhile","moduleName":"Data.String.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the longest prefix (possibly empty) of characters that satisfy\nthe predicate.\n\n```purescript\ntakeWhile (_ /= ':') \"http://purescript.org\" == \"http\"\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/strings/v5.0.0/src/Data/String/CodeUnits.purs","end":[159,65]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"countPrefix","moduleName":"Data.String.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the number of contiguous characters at the beginning\nof the string for which the predicate holds.\n\n```purescript\ncountPrefix (_ /= ' ') \"Hello World\" == 5 -- since length \"Hello\" == 5\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[375,1],"name":".spago/strings/v5.0.0/src/Data/String/CodePoints.purs","end":[375,56]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"dropWhile","moduleName":"Data.String.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Drops the leading sequence of code points which all match the given\npredicate from the string. Operates in constant space and in time linear\nto the length of the string.\n\n```purescript\n>>> dropWhile (\\c -> fromEnum c == 0x1D400) \"𝐀𝐀 b c 𝐀\"\n\" b c 𝐀\"\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[348,1],"name":".spago/strings/v5.0.0/src/Data/String/CodePoints.purs","end":[348,56]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"takeWhile","moduleName":"Data.String.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns a string containing the leading sequence of code points which all\nmatch the given predicate from the string. Operates in constant space and\nin time linear to the length of the string.\n\n```purescript\n>>> takeWhile (\\c -> fromEnum c == 0x1D400) \"𝐀𝐀 b c 𝐀\"\n\"𝐀𝐀\"\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/strings/v5.0.0/src/Data/String/CodePoints.purs","end":[227,55]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"countPrefix","moduleName":"Data.String.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Returns the number of code points in the leading sequence of code points\nwhich all match the given predicate. Operates in constant space and in\ntime linear to the length of the string.\n\n```purescript\n>>> countPrefix (\\c -> fromEnum c == 0x1D400) \"𝐀𝐀 b c 𝐀\"\n2\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":".spago/datetime/v5.0.2/src/Data/DateTime.purs","end":[49,53]},"score":9,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"modifyTime","moduleName":"Data.DateTime","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]},{"tag":"TypeConstructor","contents":[["Data","Time"],"Time"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":".spago/datetime/v5.0.2/src/Data/DateTime.purs","end":[40,53]},"score":9,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"modifyDate","moduleName":"Data.DateTime","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Date"],"Date"]}]},{"tag":"TypeConstructor","contents":[["Data","Date"],"Date"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]},{"tag":"TypeConstructor","contents":[["Data","DateTime"],"DateTime"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5675,1],"name":".spago/unicode/v5.0.1/src/Data/CodePoint/Unicode/Internal.purs","end":[5675,50]},"score":1,"packageInfo":{"values":["unicode"],"tag":"Package"},"name":"caseConv","moduleName":"Data.CodePoint.Unicode.Internal","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","CodePoint","Unicode","Internal"],"ConversionRule"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[199,1],"name":"src/Internal/BalanceTx/CoinSelection.purs","end":[200,66]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"fromIndexFiltered","moduleName":"Ctl.Internal.BalanceTx.CoinSelection","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Transaction"],"TransactionInput"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","CoinSelection","UtxoIndex"],"UtxoIndex"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","CoinSelection"],"SelectionState"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]