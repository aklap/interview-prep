const input = 'abcabcbb';

// NOTE: This hinges on the understanding that a 'substring' is ALWAYS unique. This is a tip off that we need to use a set data structure. You could do it other ways, but it's not as elegant.

const longestString = (str) => {
  let max = 0,
      start = 0;

  function getMaxString(str) {
    // create a set to keep track of uniq chars
    let charSet = new Set();

    for (let i = 0; i < str.length; i++) {
      // This means we've arrived at end of substring.
      if (charSet.has(str[i])) {
        // REMEMBER: Slice is end EXclusive!
        if (max < str.slice(start, i).length) max = str.slice(start, i).length;
        start = i;  // Reset start bc we're at a new substring
      } else {
        charSet.add(str[i]);
      }
    }
  }

  // This takes care empty input strings
  if (str.length) getMaxString(str);
  // return the longest string length
  return max;
}

// Test
console.log(longestString(input))
