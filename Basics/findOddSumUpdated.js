// Index and values of every indeces.
function isOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let elements = numbers[index];
    console.log(index, elements);
  }
}

// Odd Numbers and Summation of Odd Numbers
function oddSum(oddNumbers) {
  let sum = 0;
  let oddNums = [];
  for (let i = 0; i < oddNumbers.length; i++) {
    let index2 = i;
    let elements2 = oddNumbers[index2];
    if (elements2 % 2 !== 0) {
      oddNums.push(elements2); // Every elements is being pushed in an array named as oddNums[];
      sum += elements2;
    }
  }
  console.log(sum);
  console.log(oddNums);
}
var num = [10, 25, 35, 45, 50, 65, 70, 85, 100];
isOdd(num);
oddSum(num);
