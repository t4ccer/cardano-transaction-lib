// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["179891854"] = [{"values":[{"sourceSpan":{"start":[221,1],"name":".spago/parsing/v10.2.0/src/Parsing/String/Replace.purs","end":[227,40]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"splitCapT","moduleName":"Parsing.String.Replace","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"ParserT"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"NonEmptyList"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}}]}}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Monad transformer version of `splitCap`. The `sep` parser will run in the\nmonad context.\n\n#### Example\n\nCount the pattern matches.\n\nParse in a `State` monad to remember state in the parser. This\nstateful `letterCount` parser counts\nthe number of pattern matches which occur in the input, and also\ntags each match with its index.\n\n\n```purescript\nletterCount :: ParserT String (State Int) (Tuple Char Int)\nletterCount = do\n  x <- letter\n  i <- modify (_+1)\n  pure (x /\\ i)\n\nflip runState 0 $ splitCapT \"A B\" letterCount\n```\n\nResult:\n\n```purescript\n[Right ('A' /\\ 1), Left \" \", Right ('B' /\\ 2)] /\\ 2\n```\n"}],"tag":"SearchResult"}]