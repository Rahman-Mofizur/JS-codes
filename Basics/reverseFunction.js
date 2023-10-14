function reverseFunc(arrayOfNums) {
  var reverse = [];
  var size = arrayOfNums.length;
  for (let i = size - 1; i >= 0; i--) {
    reverse.push(arrayOfNums[i]);
  }
  return reverse;
}
var array = [189, 168, 188, 167, 153, 186, 179, 153, 156];
console.log(array);
console.log(reverseFunc(array));
