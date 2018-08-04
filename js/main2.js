//Sum of positive

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

//ANSWER

function positiveSum(arr) {
  let total = 0;
  arr.forEach(function(v) {
    if (v > 0) {
      total += v;
    }
  })
  return total;
}

//ANSWER
// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }


//MY CODE (VERY WRONG LOL)
// let nums = [ -1, 3, 6, -4, 7, -9];
//
// function positiveSum(arr) {
//
//   let positiveNums = [];
//   for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positiveNums.push(arr[i]);
//     }
//   }
//   for (let idx = 0; idx < positiveNums.length; idx++) {
//       positiveNums = positiveNums + idx;
//   }
//   console.log(positiveNums);
// };
//
// positiveSum(nums);
