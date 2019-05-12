// An implementation of throttling that catches and runs the last function call
// Stretch: For example, you could store all the ignored executions and run them all at the end in order.

const throttle = (func, limit) => {
  // flag for if statement, last call to callback function
  let lastFunc
  // variable to track the last time callback was executed
  let lastRan
  let queued  = []

  return function() {
    // only need this if the callback requires it
    const context = this
    const args = arguments

    if(!lastRan) { // NOTE: this condition only exists once
      func.apply(context, args) // bind context as needed and run callback
      lastRan = Date.now() // time stamp of last execution of callback
    } else {
      queued.unshift(func) // append to beginning of array
      console.log('clearing timeout!', queued)
      clearTimeout(lastFunc) // cancel setTimeout
      lastFunc = setTimeout(function() {
        // check if we should run callback based on time limit
        if((Date.now() - lastRan) >= limit) {
          // return each function call in order
          setInterval(() => { 
            if(queued.length > 0) {
              queued.pop().apply(context, args) 
            }
          }, 1000)
          // bind if needed and call callback function
          // func.apply(context, args)
          // set timestamp of last execution to now
          lastRan = Date.now()
        }
      }, limit-(Date.now() - lastRan)) // limit for timeout
    }
  }
}

// an example callback func that doesn't require binding
// function greeting() {
//   console.log('hi')
// }

// an example callback func that requires binding
function clickInfo() {
  console.log('you clicked on this element: ', this)
}

body = document.getElementById('body')
// body.addEventListener('click', throttle(greeting, 3000))
body.addEventListener('click', throttle(clickInfo, 3000))
