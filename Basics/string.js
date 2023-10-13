var fName = "Eiman";
console.log(fName);
console.log(fName.charAt(0));
console.log(fName.at(3));
console.log(fName[1]);

const userName = "mohammedEiman";
const userInput = "MohammedEiman";
if (userName === userInput) {
  console.log("Successfully logged in!");
} else {
  console.log("Please, check your input.");
}

function logIn(logInName, inputName) {
  console.log("\nFunction is called!");
  var logInNameLowerCase = logInName.toLowerCase();
  console.log(logInNameLowerCase);
  var inputNameLowerCse = inputName.toLowerCase();
  console.log(inputNameLowerCse);
  if (logInNameLowerCase === inputNameLowerCse) {
    console.log("Successfully logged in!");
  } else {
    console.log("Please, check your input.");
  }
}

logIn(userName, userInput);
