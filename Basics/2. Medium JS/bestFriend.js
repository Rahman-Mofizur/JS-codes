function bestFriend(friends) {
  var bff = friends[0];

  for (let i = 1; i < friends.length; i++) {
    if (bff.length <= friends[i].length) {
      bff = friends[i];
    }
  }
  return bff;
}
var frndsArray = ["Leon", "Mashraffee", "Dihan", "MinhaZ", "Junied", "Tahmeed"];
console.log(bestFriend(frndsArray));
// bestFriend(frndsArray);
