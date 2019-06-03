/*
Problem description:

Given an array of integers eg[1, 2, -3, 1] find whether there is a sub - sequence that sums to 0 and return it(eg 1, 2, -3 or 2, -3, 1)

NOTE: the language is ambiguous 👎🏼. It is not permutations or subSETS that match a sum, but subARRAY. The hint is 'sequence' indicating position in the collection matters, ie, numbers that are contiguous.
*/

// const input = [1, 2, -3, 1]; // true
const input = [-3, 2, 3, 1, 6]; // false

// Simple solution, O(n**2) because for every el in n, we visit the entire length of the array

const simpleSolution = (input) => {
  for (let i = 0; i < input.length; i++) {
    let sum = input[i]; // we always need to have a running total of sums for a subARRAY

    for(let j=i+1; j < input.length; j++) {
      sum += input[j];
      if(sum === 0) return true;
    }
  }

  return false;
}
// Test
console.log(simpleSolution(input));

/*
If we consider all sums, we can
notice that there is a subarray with 0
sum when:

1) Either a  sum repeats because these represent locations where the overall change in the function is zero (remember, don't look at these as permutations or combinations of nums, look at this as change over a time period where we only care about the value at start and the value at end of time period) or
2) Or sum becomes 0.

Therefore, we need to keep a hash or ideally a set because we can't just assume we'll find 0 sum.
*/
// Set solution, O(n). We visit each element only 1 time.
const setSolution= (input) => {
  s = new Set();

  // represents running sum, as we test incrementally larger subsets
  let sum = 0;

  for(let i = 0; i < input.length; i++) {
    sum += input[i] // keep a running total
    // Premise is true when sum equals 0 or sum repeats
    if(sum === 0 || s.has(sum)) {
      return true;
    }
    s.add(sum);
  }
  return false;
}

// Test
console.log(setSolution(input));

