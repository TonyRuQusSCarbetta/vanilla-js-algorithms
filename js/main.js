//1.
//FizzBuzz challenge
//Write a function that prints the numbers from 1 to 100.
//But for multiples of three prints Fizz instead of the number and for the multiples of five prints Buzz.
//For numbers which are multiples of both three and five prints FizzBuzz.



const printFizzBuzz = () => {
    for (let i = 0; i < 101; i++){
      if (i % 3 === 0 && i % 5 == 0) {
          console.log('FizzBuzz')
          } else if (i % 3 === 0) {
            console.log('Fizz')
          } else if (i % 5 === 0) {
            console.log('Buzz')
          } else {
            console.log(i)
          }
    }
}

printFizzBuzz();


//2.
//Remove Duplicates from an array
const dirtyArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 10,]
const cleanArray = [];
const removeDupliactesFromArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (cleanArray.indexOf(arr[i]) === -1) {
      cleanArray.push(arr[i]);
    }
  }
}

removeDupliactesFromArray(dirtyArray);
// console.log(cleanArray);

//3.
//Sort numbers in array
cleanArray.sort((a, b) => {
  return a - b;
})
console.log(cleanArray);
