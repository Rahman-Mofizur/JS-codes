// For Loop
var i = 0;
var people = 7;
for (i = 0; i < people; i++) {
  console.log("Roast Given to Person: ", i + 1);
}

// While loop
var j = 0;
var car = 10;
var addition = 0;
while (j < car) {
  console.log("Car sell hoyeche: ", j + 1);
  addition = addition + j;
  j++;
}
console.log("Total car sell hoyeche: ", j);
console.log(addition);

// Array  Loop
var numbers = [35, 52, 95, 85, 45, 62, 38, 18, 72];
var countNumbers = numbers.length;
// console.log(countNumbers);
var k = 0;
for (k = 0; k < countNumbers; k++) {
  console.log("Number ", k + 1, " is= ", numbers[k]);
}

// Loop er baire jodi console kori tahole 1 barti hobe
var ikia = 0;
for (ikia = 0; ikia < 5; ikia++) {
  console.log(ikia);
}
console.log(ikia);

var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
  if (marks[i] >= 15) {
    continue;
  }
  console.log(marks[i]);
}

var i = 5;
for (; i < 5; i++) {
  console.log(i);
}

// Will execute one time extra than while loop
var kit = 6,
  p = 0;
do {
  console.log("This is number " + (p + 1));
  p++;
} while (p <= kit);
