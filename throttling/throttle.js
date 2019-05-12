// An implementation of 'throttling' from https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

// an ES6 arrow function, so there is no this
const throttle = (func, limit) => {
  let inThrottle // a flag controlling execution of if block below
  return function() { // NOTE: why do we need this?
    const args = arguments // the event obj
    const context = this // the element I clicked on
    if(!inThrottle) { // condition for flag
      func.apply(context, args) // NOTE: Only need to bind if the func needs it
      inThrottle = true // flip flag, do not run this if statement
      setTimeout(() => inThrottle = false, limit) // reset flag after time limit is done
    }
  }
}

// an example callback func that doesn't require binding
// function greeting() {
//   console.log(this)
//   console.log('hi')
// }

// an example callback func that requires binding
function salutation() {
  console.log('you clicked on this element: ', this)
}

body = document.getElementById('body')
// body.addEventListener('click', throttle(greeting, 3000))
body.addEventListener('click', throttle(salutation, 3000))
