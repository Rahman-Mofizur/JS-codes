console.log(9);
console.log("Hello " + "World!");
// console.log(Hello);
const fruits = ["Apple", "Mango"];
fruits.pop();
fruits.push("Jackfruit");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits[0]);

// Variable
var Name = "Mohammed Eiman";
var location = "Badurtola, Chittagong";
console.log("My name is: ", Name);
var fionce_name = "M K E";
console.log(fionce_name);

// Cases
var my_home_address = "Chittagong"; // snake case
var myHomeAddress = "Chittagong"; // Camel Case
var MyHomeAddress = "Chittagong"; // Pascal case

var $_FK1010 = "This is a Keyboard and Mouse Conbo-pack.";
console.log($_FK1010);

// String
var cgpa = "3.56";
// Numbers/ Integer
var cgpa1 = 3.56;
// Float
var cgpa2 = 3.56;
// String to Int Conversion
var cgpa5 = parseInt(cgpa);
// String to Float conversion
var cgpa6 = parseFloat(cgpa);

console.log(cgpa);
console.log(cgpa1);
console.log(cgpa2);
console.log(cgpa5);
console.log(cgpa6);

// Only 0.1 + 0.2 er khetrei JS ektu problem kore.
// Tai toFixed FUNCTION use korte hoi.
var a = 0.1;
var b = 0.2;
var c = a + b;
c = parseFloat(c);
c = c.toFixed(1); // Doshomiker por ek ghoor porjonto jabe.
console.log(c);

// Type of
var fullName = "Mohammed Mofizur Rahman";
var age = 23;
age += 1;
var module = "16.05";
// module = parseInt(module);
module = parseFloat(module); //Parsing FUNCTION is used for changing the datatype.
var isHappy = true;
console.log(fullName);
console.log(typeof fullName);
console.log(age);
console.log(typeof age);
console.log(isHappy);
console.log(typeof isHappy);
console.log(module);
console.log(typeof module);

// Same variable declaration 2 times: ek line por ek line Execute kore!
var car = "Toyota";
// console.log(car);
var car = "Marcedes";
console.log(car);

// JS Array
var carName = ["Toyota", "Marcedes", "Volkswagon", "Bentley"];
carName.push("BMW");
var carPosition = carName.indexOf("Bentley");
console.log(carName);
console.log(carName[2]);
console.log(carPosition);
console.log(carName.length);

// Condition Type: 1
var iPhonePrice = 110000;
var samsungPrice = 80000;
var myBudget = 120000;

if (myBudget >= iPhonePrice + samsungPrice) {
  console.log("iPhone + Samsung 2 tai kinte parbo");
} else if (myBudget >= iPhonePrice) {
  console.log("Only iPhone Kinbo");
} else if (myBudget >= samsungPrice) {
  console.log("Only Samsung Kinbo");
} else {
  console.log("Phone kinar dorkar nai");
}
