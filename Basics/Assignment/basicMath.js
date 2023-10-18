// Problem: 1
// input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে ।
// Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনি ংফুল মেসেজ রিটার্ন করে দি বে ফাংশন থেকে ।

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please, enter a number";
  } else {
    var cube = number * number * number;
    return cube;
  }
}
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(-4));
console.log(cubeNumber("uig"));
