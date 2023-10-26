// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function substitution() {
  function substitution(input, alphabet, encode = true) {
  function isAlphabetUnique(alphabet) {
    const seen = {};
    for (let char of alphabet) {
      if (seen[char]) return false;
      seen[char] = true;
    }
    return true;
  }

  if (!alphabet || alphabet.length !== 26 || !isAlphabetUnique(alphabet)) {
    return false;
  }

  const realAlphArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphaArray = alphabet.split('');
  const inputArray = input.toLowerCase().split('');

  if (encode) {
    const map = {};
    realAlphArray.forEach((char, index) => {
      map[char] = alphaArray[index];
    });

    const result = inputArray.map(char => {
      if (map[char] && char !== ' ') {
        return map[char];
      } else {
        return char;
      }
    }).join('');

    return result;
  } else {
    const map = {};
    alphaArray.forEach((char, index) => {
      map[char] = realAlphArray[index];
    });

    const result = inputArray.map(char => {
      if (map[char] && char !== ' ') {
        return map[char];
      } else {
        return char;
      }
    }).join('');

    return result;
  }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution }