// This will help you to check whether the user is inputed the right extension or not
// Suppose in a form you ask for a picture [.png / .jpg], But the user send you .pdf file. Should it be valid?
var book1 = "The Alchemist.pdf";
console.log(book1.endsWith(".pdf"));

// Split and Slice
var lyrics =
  "Prophet Muhammad, peace be upon him, A beacon of light in a world so dim.";
console.log(lyrics.split(" ")); // Split with one space
console.log(lyrics.slice(0, 17)); // Cake slice from Index[0-16] Last one will not be taken.
