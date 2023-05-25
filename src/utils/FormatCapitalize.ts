function FormatCapitalize(str: string) {
  const words = str.split(' ');

  const capitalizedWords = words.map((word: string) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);

    return `${firstLetter}${restOfWord}`;
  });
  const capitalizedStr = capitalizedWords.join(' ');

  return capitalizedStr;
}

export default FormatCapitalize;
