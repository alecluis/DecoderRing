// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function caesar() {
  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    if (!input) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const shiftChar = (char, shift) => {
      const lowerCaseChar = char.toLowerCase();
      if (alphabet.includes(lowerCaseChar)) {
        const currentIndex = alphabet.indexOf(lowerCaseChar);
        let newIndex = (currentIndex + shift) % 26;
        if (newIndex < 0) {
          newIndex += 26;
        }
        const shiftedChar = alphabet[newIndex];
        return shiftedChar;
      }
      return char;
    }
    const result = input.split('').map(char => shiftChar(char, shift)).join('');
  return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

