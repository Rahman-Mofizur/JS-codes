function findOddSum(myArr) {
  var size = myArr.length;
  console.log(size);

  if (size <= 0) {
    return 0;
  } else {
    sum = 0;
    for (var i = 0; i < size; i++) {
      if (myArr[i] % 2 != 0) {
        sum += myArr[i];
      }
    }
    console.log(sum);
  }
}
var numArr = [12, 65, 45, 78, 32, 45, 91];
findOddSum(numArr);
