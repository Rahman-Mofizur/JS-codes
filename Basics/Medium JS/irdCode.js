//  Exapmle: 1, 5, 7, 10, 15
// Section will be appear: 1, 2, 3, 4, 1, 2, 1, 2, 3, 1, 2, 3, 4. 5.

function serialNumbers(numbers) {
  var serial = [];
  for (let i = 0; i < numbers.length; i++) {
    var inc = numbers[i + 1] - numbers[i];
    var startSrial = 0;

    for (let j = 0; j < inc; j++) {
      if (startSrial <= inc) {
        startSrial++;
        serial.push(startSrial);
      }
    }
  }
  return serial;
}
var randomNumbers = [1, 5, 7, 10, 15];
console.log(serialNumbers(randomNumbers));
// serialNumbers(randomNumbers);
