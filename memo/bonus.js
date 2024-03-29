// This implementation does the same thing, but it's organized better

// Memoizer is a module that contains a single public method, 'memo', to memoize functions
let cache = {};
// Private helper method
function cacher(func) {
  return function() {
    let key = JSON.stringify(arguments[0]);

    if(cache[key]) {
      return cache[key]
    } else {
      let val = func.apply(this, arguments);
      cache[key] = val;
      return val;
    }
  }
}

  // Public method
export function memo(func) {
  console.log('memoing')
  return cacher(func);
}
