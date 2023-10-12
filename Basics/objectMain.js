const person = {
  name: "Mohammed",
  age: 24,
  isStudent: true,
};

// Way 1
var propertyName = Object.keys(person);
var PropertyValues = Object.values(person);
console.log(propertyName);
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
  console.log("${key} : ${value}"); // Will not work
}

// Way 4
for (let pNames in person) {
  console.log(`${pNames} : ${person[pNames]}`);
}
