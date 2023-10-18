// Problem: 2
// তোমাকে একটা function দেওয়া হবে called "matchFinder()” যা ইনপুট হিসেবে দুইটা string নিবে।

// যদি প্রথম স্ট্রিংটির কোনো একটি অংশের সাথে দ্বিতীয় স্ট্রিংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি boolean রিটার্ন করবে এক্ষেত্রে তোমাকে true রিটার্ন করতে হবে। আর যদি পুরোপুরি মিল খুজে না পাও সেক্ষেত্রে তুমি boolean false রিটার্ন করবে।

// Bonus: দুটি ইনপুট স্ট্রিং দেওয়া হলো কিনা সেটা validate করবে। যদিদুইটি বা যেকোনো একটি ইনপুট স্ট্রিং না হয় সেক্ষেত্রে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে।

function matchFinder(string1, string2) {
  if (typeof string1 == "undefined" || typeof string2 == "undefined") {
    return "Please, enter both the strings";
  } else {
    if (typeof string1 != "string" || typeof string2 != "string") {
      return "Please, enter strings only";
    } else {
      if (string1.includes(string2)) {
        return true;
      }
      return false;
    }
  }
}
console.log(matchFinder());
console.log(matchFinder("Peter Parker"));
console.log(matchFinder("Peter Parker", 4));
console.log(matchFinder("John Doe", "ohn"));
console.log(typeof matchFinder("John Doe", "ohn")); // Checking it is boolean or not!
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
