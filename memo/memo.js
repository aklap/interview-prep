// // example implementation of memoization: https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
// function memo(func) {
//   let cache = {}; // dictionary of all arguments
//   // anonymous closure inherits all variables including func, as a rule, closures do not inherit an outer function’s (memo) arguments object

//   // use this rule to our advantage in order to play with the function we want to memoize
//   return function() { // to keep state
//     let key = JSON.stringify(arguments); // convert arg into a string -> key

//     if(cache[key]) { // if we've seen this value before
//       console.log(cache) // log info for us
//       return cache[key] // add to dictionary
//     } else { // else if we've never seen this value before
//       let val = func.apply(null, arguments); // call the callback
//       cache[key] = val; // add arg to the dictionary with result as value
//       return val; // return value back up
//     }
//   }
// }


// Example I.

// function memo(callback) {
//   console.log('memo args', arguments)
//   console.log('memo context', this)
//   // anonymous closure - why should we use this?
//   return function() {
//     console.log(callback)
//     console.log('args', arguments)
//     console.log('context', this)
//   }
// }

// // example callback func
// function add(num) {
//   return num + num;
// }

// // memoize (make more efficient/faster the add callback)
// // memo(add(2))() // bad: don't do this

// // memoized function, add
// let adder = memo(add)
// execute the memoized function
// console.log(adder(2))

// Example II.
// function memo(callback) {
//   let cache = {}; // object to store values
//   console.log('Starting cache: ', cache)
//   // anonymous closure -- why? expl.
//   return function() {
//     let key = JSON.stringify(arguments[0])
//     // check for key in cache
//     if(cache[key]) {
//       console.log(`Cached value found for ${key}th fibonacci number:`, cache[key])
//       return cache[key] // if arg seen before, return its value
//     } else {
//       // why did he leave out let?
//       // NOTE: '.apply returns the value of the function it calls'--huh? that's not what .apply does.
//       let val = callback.apply(this, arguments) // get result of that func and arg
//       cache[key] = val; // store the result in cache as key-value pair
//       console.log(`A new number! Value added for ${key}th number: ${cache[key]}`)
//       return val; // return the value
//     }
//   }
// }

// Bonus
import Memoizer from './bonus.js';

// Recursive example
  var fib = Memoizer.memo(function(n) {
    if(n < 2) { // this example assumes fib sequence starts with 1 and not 0
      return 1; // base case
    } else {
      console.log(`Checking in cache for ${n}th fib number...`); // to check if we've cached a value
      return fib(n-2) + fib(n-1); // get next number in the sequence
    }
  });

// Test
// console.log(fib(10)); // should be 89
console.log(fib(10)); // should be 89
