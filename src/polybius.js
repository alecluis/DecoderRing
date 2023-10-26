// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function polybius() {
  function polybius(input, encode = true) {
    const pbSquare = {
      'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
      'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42',
      'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43',
      'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44',
      'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55',
      ' ': ' '
    };
    const reversePbSquare = {
      '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
      '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k',
      '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
      '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
      '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z',
      ' ': ' '
    };

    function encodeInput(input) {
      function switchCharacter(char) {
        return pbSquare[char.toLowerCase()] || char;
      }
      return input.split('').map(switchCharacter).join('');
    }

function decodeInput(input) {
  const matchedDigits = input.match(/(42|\s)|\d{2}/g) || [];

let count = 0;
  for(let i=0;i<input.length;i++)
    {
      if(input[i]!==' ')
        {
          count+=1
        }
    }
  if(count%2===1)
    {
      return false;
    }

  function reverseNumber(number, index, arr) {
    if (number === '42') {
      if (arr[index + 1] === '42' || arr[index - 1] === '42') {
        return '(i/j)';
      } else {
        return '(i/j)';
      }
    }
    return reversePbSquare[number] || '';
  }

  const newArray = matchedDigits.map(reverseNumber);
  return newArray.join('');
}


    return encode ? encodeInput(input) : decodeInput(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

