function reverseWords(sentence) {
  // console.log(sentence.split(" "));
  var reversedSentence = "";
  var words = sentence.split(" ");
  var size = words.length;
  for (let i = size - 1; i >= 0; i--) {
    reversedSentence = reversedSentence + words[i] + " ";
  }
  return reversedSentence;
}
var aboutMe = "My name is Eiman";
console.log(reverseWords(aboutMe));

// This can be done with split and join function:
// Step 1: split with " " [Whitespace];
// Step 2: use reverse for loop and push the elements into an array;
// Step 3: join with " " [Whitespace]
