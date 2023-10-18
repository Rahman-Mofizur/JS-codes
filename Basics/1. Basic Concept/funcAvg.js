function make_avg(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  var avg = sum / 3;
  console.log("Total Sum is " + sum + " and average is " + avg);
}

make_avg(15000, 45000, 25000);

// Function that takes an array of int and size of that array.
var sum = 0;
function avg(numbers, size) {
  if (size <= 0) {
    return 0;
  }

  for (i = 0; i < size; i++) {
    sum = sum + numbers[i];
  }
  avgSum = sum / size;
  return avgSum;
}

var arrNums = [10, 20, 30, 40, 50];

var average = avg(arrNums, 5);
console.log(average);
