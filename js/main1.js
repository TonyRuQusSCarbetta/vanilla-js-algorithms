// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
// If the input array is empty or null, return an empty array:
//

// ATTENTION!
// The passed array should NOT be changed. Read more here.
//
// For example:
//
// input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// return [10, -65].



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = 0;
let sumOfNegatives = 0;
let result = [];

function countPositivesSumNegatives(input) {

  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      counter = counter + 1;
    } else {
      sumOfNegatives = i + sumOfNegatives;
    }
  }
  result.push(counter, sumOfNegatives);
}

countPositivesSumNegatives(arr);
console.log(counter);
console.log(sumOfNegatives);
console.log(result);


//Codewars answer
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}
