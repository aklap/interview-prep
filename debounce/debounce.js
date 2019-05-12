const debounce = (func, delay) => {
  let inDebounce // a variable to track the delay period
  return function() {
    const context = this
    const args = arguments
    console.log('Waiting to finish...')
    clearTimeout(inDebounce) // cancel previous setTimeout timeout
    inDebounce = setTimeout(() => func.apply(context, args), delay) // reset timeout and wait
  }
}

// example callback
function stamp() {
  console.info('Finally execute on: ', new Date().toUTCString());
}

document.getElementById('square').addEventListener('click', debounce(stamp, 3000));
