const lyrics = "Muslims will be WinnEr One DaY!";
var doesExist = lyrics.includes("winner");
console.log(doesExist); // Gives you True or False.

console.log("");

var searchingString = "winner";
var doesExist2 = lyrics.toLowerCase().includes(searchingString.toLowerCase());
console.log(doesExist2);

// .indexOf("Text")

console.log(lyrics.indexOf("winner")); // Gives you -1, cz there is WinnEr not winner!
console.log(lyrics.toLowerCase().indexOf("winner"));

if (lyrics.indexOf("will") === -1) {
  console.log("String is not found!");
} else {
  console.log("String is found!");
}

if (doesExist2 === true) {
  console.log("String also found!");
}
