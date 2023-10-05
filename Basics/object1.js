// Array Output:
var friend = ["Abdullah", "Farzana", "Mohammed", "Tasnim"];
var age = ["19", "22", "25", "15"];

for (var i = 0; i < friend.length; i++) {
  var frndName = friend[i];
  var frndAge = age[i];
  console.log(frndName + " : " + frndAge);
}

// Object Output:
var friendAge = {
  Abdullah: 19,
  Farzana: 22,
  Mohammed: 25,
  Tasnim: 15,
};

var propertyName = Object.keys(friendAge);
console.log(propertyName);

var propertyValues = Object.values(friendAge);
console.log(propertyValues);

for (var i = 0; i < propertyName.length; i++) {
  var Names = propertyName[i];
  var Ages = friendAge[Names];
  console.log(Names + " : " + Ages);
}
