// const person = { name: "John Doe", age: 30, isStudent: true };
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

const person = {
  name: "Mohammed",
  age: 24,
  isStudent: true,
};

// Way 1
var propertyName = Object.keys(person);
var PropertyValues = Object.values(person);
console.log(propertyName + ": " + PropertyValues);
console.log(propertyName, ": ", PropertyValues);

// Way 2
var PersonName = person.name;
var personAge = person["age"]; // Iteration chalale person[i] property Values gula peye jabo.
console.log(PersonName, personAge);

// Way 3

for (let i = 0; i < propertyName.length; i++) {
  var key = propertyName[i];
  var value = person[key];
  console.log(`${key} : ${value}`);
  console.log("${key} : ${value}");
}

// Way 4
for (let pNames in person) {
  console.log(`${pNames} : ${person[pNames]}`);
}
