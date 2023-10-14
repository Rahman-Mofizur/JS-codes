var biriyaniGiveAwayList = [
  "Eiman",
  "Mash",
  "Mohin",
  "Leon",
  "Dihan",
  "Mohin",
  "Eiman",
  "Mash",
  "Mohin",
  "Dihan",
  "Mithu",
  "Minhaz",
  "Mohin",
];
function uniqueNames(names) {
  var biriyaniPabe = [];
  for (let i = 0; i < names.length; i++) {
    if (biriyaniPabe.includes(names[i]) == false) {
      // .include() checks whether there is any duplication or not, if yes then return true.
      biriyaniPabe.push(names[i]);
    }
  }
  return biriyaniPabe;
}
console.log(uniqueNames(biriyaniGiveAwayList));
