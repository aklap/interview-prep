// From https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea

// Reversing a string
const reverseString = (str) => {
  if (str == ''){ return str}
  console.log(str)
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString('cat'));

// Find the factorial
const factorial = (n) => {
  // Base case
  console.log(n)
  if(n === 1) { return 1 }
  return n * factorial(n-1)
}

console.log(factorial(3))
