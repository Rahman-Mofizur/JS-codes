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
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
