// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["150413720"] = [{"values":[{"sourceSpan":{"start":[355,1],"name":".spago/parsing/v10.2.0/src/Parsing/Token.purs","end":[355,80]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"makeTokenParser","moduleName":"Parsing.Token","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Token"],"GenLanguageDef"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Token"],"GenTokenParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The expression `makeTokenParser language` creates a `GenTokenParser`\nrecord that contains lexical parsers that are\ndefined using the definitions in the `language` record.\n\nThe use of this function is quite stylized - one imports the\nappropiate language definition and selects the lexical parsers that\nare needed from the resulting `GenTokenParser`.\n\n```purescript\nmodule Main where\n\nimport Parsing.Language (haskellDef)\nimport Parsing.Token (makeTokenParser)\n\n-- The parser\nexpr = parens expr\n   <|> identifier\n   <|> ...\n\n\n-- The lexer\ntokenParser = makeTokenParser haskellDef\nparens      = tokenParser.parens\nbraces      = tokenParser.braces\nidentifier  = tokenParser.identifier\nreserved    = tokenParser.reserved\n...\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[206,1],"name":".spago/parsing/v10.2.0/src/Parsing/Indent.purs","end":[206,73]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentParens","moduleName":"Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding parentheses\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[202,1],"name":".spago/parsing/v10.2.0/src/Parsing/Indent.purs","end":[202,73]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentBraces","moduleName":"Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding braces\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[198,1],"name":".spago/parsing/v10.2.0/src/Parsing/Indent.purs","end":[198,73]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentAngles","moduleName":"Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding angle brackets\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[194,1],"name":".spago/parsing/v10.2.0/src/Parsing/Indent.purs","end":[194,75]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"indentBrackets","moduleName":"Parsing.Indent","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing","Indent"],"IndentParser"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Parses with surrounding brackets\n"}],"tag":"SearchResult"}]