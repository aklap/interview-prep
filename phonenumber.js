const input  = '23';
const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];

/*
The key things to do here:

- We're working with string so we can slice away and use recursion
- We need to construct a hashmap to map key nums to letters in arrays
- Our base case is when we run out of digits or input string, then return the result array of strings
-
*/

const letterCombinations = (digits) => {
  // Helper function: Create mapping of digits, 2-9, to letters
  function buildMap() {
    const letters = [
                        'abc',
                        'def',
                        'ghi',
                        'jkl',
                        'mno',
                        'pqrs',
                        'tuv',
                        'wxyz'
                      ];

    let keyLetters = new Map();
    // Don't forget that this is zero indexed
    for(let i=0; i<letters.length; i++) {
      keyLetters.set((i+2).toString(), (letters[i]));
    }
    return keyLetters;
  }

  function getCombo(letters, remainderDigits) {
    // base case is when we run out of nextDigits or our input string
    if(remainderDigits.length === 0) return result.push(letters);
    // if we still have digits...
    let num = remainderDigits[0]; // grab the first digit in input string, convert to num
    // for each letter in a key of the map
    for(let i = 0; i < phone.get(num).length; i++) {
      getCombo(letters + phone.get(num)[i], remainderDigits.slice(1));
    }
  }

  // Driver code
  let result = [];
  let phone = buildMap();
  if (digits.length) {
    getCombo('', digits);
  }

  return result;
};

console.log(letterCombinations(input));
