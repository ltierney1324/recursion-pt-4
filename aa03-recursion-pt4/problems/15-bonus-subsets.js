/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // Your code here
    // Base case: the subset of an empty array is an array containing an empty array
    if (arr.length === 0) {
      return [[]];
  }

  // Recursive case
  // Remove the last element from the array
  let lastElement = arr[arr.length - 1];
  // Get the subsets of the array without the last element
  let withoutLast = subsets(arr.slice(0, arr.length - 1));
  // Create a copy of each subset and add the last element to it
  let withLast = withoutLast.map(subset => [...subset, lastElement]);

  // Return the combination of both
  return withoutLast.concat(withLast);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
