// From https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
import { memo } from './memo.js';

// Reversing a string
const reverseString = memo((str) => {
  if (str == ''){ return str}
  console.log(str)
  return reverseString(str.substr(1)) + str[0];
});

// TO DO: handle compound words
console.log(reverseString('cat'));
console.log(reverseString('magnificat'));

// Find the factorialtorial
const factorial = memo(function(n){
  // Base case
  if(n === 1) { return 1 }
  return n * factorial(n-1)
});

// Change the order of the calls below to see the difference made by memoizing
console.log(factorial(10))
console.log(factorial(3));
console.log(factorial(6));

