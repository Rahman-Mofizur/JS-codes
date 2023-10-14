// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

function fibo() {
  var array = [];
  var first = 0;
  var second = 1;
  var temp;
  for (let i = 0; i < 10; i++) {
    array.push(first);
    temp = first;
    first = first + second;
    second = temp;
  }
  return array;
}
console.log(fibo());
