// Array
var person1 = ["Mohammed Eiman", 25, "Dhaka", "Bangladesh"];
console.log(person1);

// Object
var person2 = {
  name: "Mohammed Eiman",
  age: 25,
  city: "Dhaka",
  country: "Bangladesh",
};
console.log(person2);

var myCar = {
  Name: "Marcedes",
  Class: "S-Class",
  Model: "CLE",
  Color: "Dark Blue",
};

myCar.Color = "Black";

// Diff between , and + in Output.
console.log(
  "My car name is " + myCar.Name,
  ". It is ",
  myCar.Class,
  " and Model is ",
  myCar.Model,
  ". It is ",
  myCar.Color
);

console.log(
  "My car name is " +
    myCar.Name +
    ". It is " +
    myCar.Class +
    " and Model is " +
    myCar.Model +
    ". It is " +
    myCar.Color
);

// Keys and Values
var myCarKey = Object.keys(myCar);
console.log(myCarKey);

var myCarValues = Object.values(myCar);
console.log(myCarValues);
