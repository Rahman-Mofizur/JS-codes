// replace "Grapes" with Apple.S

var fruits = ["Mango", "Grapes", "Orange"];
// Checking the index of Grapes

var indexOfGrapes = fruits.indexOf("Grapes");

if (indexOfGrapes !== -1) {
  fruits[indexOfGrapes] = "Apple";
}

console.log(fruits);

// Grades
var number = 48;
if (number > 39) {
  if (number >= 80) {
    console.log("You got A");
  } else if (number >= 70) {
    console.log("You got B");
  } else if (number >= 60) {
    console.log("You got C");
  } else if (number >= 50) {
    console.log("You got D");
  } else {
    console.log("You got E");
  }
} else {
  console.log("Sorry! You are fail.");
}

console.log(6 != 6);
console.log(6 >= 6);
