const findFirstStringInBracket = (str) => {
  if (!str.length) return ''

  const indexFirstBracketFound = str.indexOf("(")
  if (indexFirstBracketFound < 0) return ''

  let wordsAfterFirstBracket = str.substr(indexFirstBracketFound)
  if (!wordsAfterFirstBracket) return ''

  wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1)
  const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")")

  return indexClosingBracketFound >= 0 ? wordsAfterFirstBracket.substring(0, indexClosingBracketFound) : ''
}