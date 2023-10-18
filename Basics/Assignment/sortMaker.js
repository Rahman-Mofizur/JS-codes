// Problem: 3
// তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দুইটি উপাদান থাকবে।
// যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে।
// যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবে: "equal"
// Bonus : যদি অ্যারের যেকোনো একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি রিটার্ন করবে "Invalid Input"

function sortMaker(arr) {
  var sortedArray = [];

  if (arr.length > 2 || arr.length <= 0) {
    return "The array must contain 2 numbers, no more and no less";
  } else {
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    } else {
      if (arr[0] === arr[1]) {
        return "equal";
      } else if (arr[0] < arr[1]) {
        sortedArray.push(arr[1]);
        sortedArray.push(arr[0]);
      } else {
        return arr;
      }
      return sortedArray;
    }
  }
}

var array1 = [];
var array2 = [2, 3, 5];
var array3 = [2, 3];
var array4 = [4, 2];
var array5 = [4, 4];
var array6 = [1, 2];
var array7 = [4, -2];
var array8 = [0, 1];
console.log(sortMaker(array1));
console.log(sortMaker(array2));
console.log(sortMaker(array3));
console.log(sortMaker(array4));
console.log(sortMaker(array5));
console.log(sortMaker(array6));
console.log(sortMaker(array7));
console.log(sortMaker(array8));
