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
var comModel1 = myComputer["model"];
console.log(comModel1);

// Way: 3- more Dynamic:
var propertyName = "screen";
var comModel = myComputer[propertyName];
console.log(comModel);
