var nasheed =
  "Prophet Muhammad, peace be upon him. A beacon of light in a world so dim. His message of love and peace, a guiding gem.";
console.log(nasheed.split(".")); //  . (ডট) দিয়ে প্রতিটা sentence আলাদা করা হবে।
console.log(nasheed.split(" ")); //  " " (space) দিয়ে প্রতিটা sentence আলাদা করা হবে।

var newNasheed = [
  "Prophet Muhammad, peace be upon him",
  "A beacon of light in a world so dim",
  "His message of love and peace, a guiding gem.",
];

// console.log(newNasheed.join(". "));
console.log(newNasheed.join(" - ")); // প্রতিটা Array index কে " - " এর মাধ্যমে join করা হবে।
