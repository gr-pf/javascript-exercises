const palindromes = function (text) {
  let cleanText = text
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .toLowerCase()
    .split("");

  let reverseText = cleanText.slice().reverse();

  for (let i = 0; i < cleanText.length; i++) {
    if (cleanText[i] !== reverseText[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
