function make_avg(numbers, size) {
  var sum = 0;

  // If size of that array is ZERO, return 0
  if (size <= 0) {
    return 0;
  }

  for (var j = 0; j < size; j++) {
    sum += numbers[j];
  }
  return sum / size;
}

var arrInt = [5, 24, 23, 45, 23, 22, 34];
var size = arrInt.length;
var output = make_avg(arrInt, size);
console.log(output);

// float to int in js
output = parseInt(output);
console.log(output);
