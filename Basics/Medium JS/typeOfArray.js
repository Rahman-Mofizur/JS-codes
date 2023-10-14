var fullName = "Mohammed Mofizur Rahman";
var age = 24;

var array = [5, 2, 7, 4, 9, 1];
var objCar = {
  name: "Marcedes",
  model: "S-class",
  color: "Black",
  price: 7500000,
};

function funcBook() {
  console.log("Just bought a new book!");
}

console.log(typeof fullName);
console.log(typeof age);
console.log(typeof array); // This will show you as an Object
console.log(typeof objCar);
console.log(typeof funcBook);

console.log(Array.isArray(array));
