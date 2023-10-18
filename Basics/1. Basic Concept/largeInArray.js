function largeNumArray(numArr) {
  let a = numArr[0];
  var large = 0;
  for (let i = 1; i < numArr.length; i++) {
    let b = numArr[i];
    if (a > b) {
      large = a;
    } else {
      a = b;
      large = a;
    }
  }
  console.log(large);
  //   return large;
}
var arrayNumber = [10, 12, 8, 18, 25, 105];
largeNumArray(arrayNumber);
