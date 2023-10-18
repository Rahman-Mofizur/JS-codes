// Problem - 4
// Input: {street: 10, house: "15A", society: "Earth Perfect" };
// Output: 10, 15A, Earth Perfect
// তোমাকে একটা function দেওয়া হবে called "findAddress()" যা ইনপুট হিসেবে একটা object নিবে। Object এর তিনটি property থাকবে।
// Bonus: যদি object এর kono property missing থাকে সে ক্ষেত্রে সেই অংশটুকু double underscore দিয়ে replace হবে (__)।

function findAddress(obj) {
  var objValues = [];
  let propertyNames = Object.keys(obj);

  if (propertyNames.length <= 3) {
    // street
    if (obj["street"] === undefined) {
      objValues.push("__");
    } else {
      objValues.push(obj["street"]);
    }
    // house
    if (obj["house"] === undefined) {
      objValues.push("__");
    } else {
      objValues.push(obj["house"]);
    }
    // society
    if (obj["society"] === undefined) {
      objValues.push("__");
    } else {
      objValues.push(obj["society"]);
    }
  } else {
    return "Please, keep only 3 properties.";
  }

  return objValues;
}

// With 3 inputs
var address1 = {
  street: 10,
  house: "15A",
  society: "Earth perfect",
};
console.log(findAddress(address1));

// With 2 inputs
var address2 = {
  street: 10,
  society: "Earth perfect",
};
console.log(findAddress(address2));

// With 1 input
var address3 = {
  street: 10,
};
console.log(findAddress(address3));
