function sortMaker(arr) {
  var sortedArray = [];
  if (arr.length > 2 || arr.length <= 0) {
    return "The array must contain 2 numbers";
  } else {
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    } else {
      if (arr[0] === arr[1]) {
        return "equal";
      } else if (arr[0] < arr[1]) {
        sortedArray.push(arr[0]);
        sortedArray.push(arr[1]);
      } else {
        return arr;
      }
      return sortedArray;
    }
  }
}

var array1 = [];
var array1 = [2, 3, 5];
var array1 = [2, 3];
var array2 = [4, 2];
var array3 = [4, 4];
var array4 = [1, 2];
var array5 = [4, -2];
var array6 = [0, 1];
console.log(sortMaker(array1));
console.log(sortMaker(array2));
console.log(sortMaker(array3));
console.log(sortMaker(array4));
console.log(sortMaker(array5));
console.log(sortMaker(array6));
