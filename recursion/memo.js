// This implementation does the same thing, but it's organized better

// Memoizer is a module that contains a single public method, 'memo', to memoize functions
let cache = {};
// Private helper method
function cacher(func) {
  return function () {
    let key = JSON.stringify(arguments[0]);

    if (cache[key]) {
      console.log('Retrieving value from cache: ', key)
      return cache[key]
    } else {
      console.log('Value not seen before: ', key)
      let val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  }
}

// Public method
export function memo(func) {
  return cacher(func);
}
