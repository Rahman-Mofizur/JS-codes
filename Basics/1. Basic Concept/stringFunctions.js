var str = "Muslims will be the winner, In Shaa Allah";
var book = "The Quran.pdf";
console.log(str.length); // Gives you length size
console.log(str.at(0)); // M
console.log(str.charAt(4)); // l
console.log(book.endsWith(".pdf")); // true
console.log(str.startsWith("Muslims")); // true
console.log(book.toLowerCase()); // the quran.pdf
console.log(book.toUpperCase()); // THE QURAN.PDF
console.log(str.includes("will")); // true
console.log(book.indexOf("Q")); // 4
console.log(book.indexOf("Quran")); // 4
console.log(book.replace("Quran", "Sunnah")); // The Sunnah.pdf
console.log(book.slice(0, 6)); // The Qu [Index[0-5]]
console.log(book.slice(5)); // uran.pdf  [Index[4 - last]]
console.log(book.substring(0, 8)); // Works like Slice.
console.log(str.split(" ")); // Every words will be separated cz we splited str with a white space.
console.log(str.split(",")); // [ 'Muslims will be the winner', ' In Shaa Allah' ]

// string.match("text/ regex")
const capitalRegex = /[A-Z]/g;
console.log(book.match(capitalRegex)); // [ 'T', 'Q' ]
console.log(book.search(".")); // [ 'T', 'Q' ]

// string.repeat(times);
const myMood = "Happy!";
console.log(`I am feeling ${myMood.repeat(3)}`); //I am feeling Happy!Happy!Happy!

//  string.trim()
const myName = "           Mohammed Mofizur Rahman       ";
console.log(`My name is ${myName}`); // My name is            Mohammed Mofizur Rahman
console.log(`My name is ${myName.trim()}`); // My name is Mohammed Mofizur Rahman
