var friends = [
  "Leon",
  "Mashraffee",
  "Mohin",
  "Junied",
  "Dihan",
  "Tahmid",
  "Ayman",
];
var profession = [
  "Software Engineer",
  "Marketer",
  "Economist",
  "Electrical Engineer",
  "Civil Engineer",
  "Lawyer",
  "Software Engineer",
];

NamesOfFriends();
function NamesOfFriends() {
  for (let names in friends) {
    var frndNames = friends[names]; // friends[0], friends[1], friends[2], friends[3], .....
    console.log(frndNames);
  }
  professionOfFriends();
}

function professionOfFriends() {
  for (let work in profession) {
    var frndWork = profession[work]; // friends[0], friends[1], friends[2], friends[3], .....
    console.log(frndWork);
  }
}

// ===========================================

console.log("\n\n"); // Add multiple line gaps

for (let i = 0; i < friends.length; i++) {
  var frnd = friends[i];
  var prfsn = profession[i];
  console.log(`${frnd} is a ${prfsn}`);
}
