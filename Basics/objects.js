var myComputer = {
  name: "Hp",
  model: "ProBook",
  core: "i5",
  screen: 15.6,
};

console.log(myComputer);

// Keys of Object:
var myComputerKeys = Object.keys(myComputer);
console.log(myComputerKeys);

// Values of Object:
var myComputerValues = Object.values(myComputer);
console.log(myComputerValues);

// Value of a key:
// Way: 1
console.log(myComputer.model);

// Way: 2- Dynamic Way:
var comCore = myComputer["core"];
console.log(comCore);

// Way: 3- more Dynamic:
var propertyName = "screen";
var comModel = myComputer[propertyName];
console.log(comModel);
