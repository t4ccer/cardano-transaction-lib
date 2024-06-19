// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2102680755"] = [{"values":[{"sourceSpan":{"start":[133,1],"name":".spago/parsing/v10.2.0/src/Parsing/String.purs","end":[133,83]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"satisfyCodePoint","moduleName":"Parsing.String","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Match a Unicode character satisfying the predicate.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/parsing/v10.2.0/src/Parsing/String.purs","end":[111,64]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"satisfy","moduleName":"Parsing.String","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Match a BMP `Char` satisfying the predicate.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/parsing/v10.2.0/src/Parsing/String/Basic.purs","end":[234,74]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"takeWhile1","moduleName":"Parsing.String.Basic","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Take the longest `String` for which the characters satisfy the\npredicate. Require at least 1 character. You should supply an\nexpectation description for the error\nmessage for when the predicate fails on the first character.\n\nSee [__`Data.CodePoint.Unicode`__](https://pursuit.purescript.org/packages/purescript-unicode/docs/Data.CodePoint.Unicode)\nfor useful predicates.\n\nExample:\n\n```\nrunParser \"Tackling the Awkward Squad\" do\n  takeWhile1 Data.CodePoint.Unicode.isLetter <?> \"a letter\"\n```\n---\n```\nRight \"Tackling\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[204,1],"name":".spago/parsing/v10.2.0/src/Parsing/String/Basic.purs","end":[204,73]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"takeWhile","moduleName":"Parsing.String.Basic","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Take the longest `String` for which the characters satisfy the\npredicate.\n\nSee [__`Data.CodePoint.Unicode`__](https://pursuit.purescript.org/packages/purescript-unicode/docs/Data.CodePoint.Unicode)\nfor useful predicates.\n\nExample:\n\n```\nrunParser \"Tackling the Awkward Squad\" do\n  takeWhile Data.CodePoint.Unicode.isLetter\n```\n---\n```\nRight \"Tackling\"\n```\n\nYou should prefer `takeWhile isLetter` to\n`fromCharArray <$> Data.Array.many letter`.\n"}],"tag":"SearchResult"}]