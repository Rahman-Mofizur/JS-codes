function reverseString(rvStr) {
  //   var reverse = [];
  var reverse = "";
  var arraySize = rvStr.length;
  for (let i = arraySize - 1; i >= 0; i--) {
    // reverse.push(rvStr[i]);
    reverse += rvStr[i]; // Concatenation = adding string with string
  }
  return reverse;
}
var str = "My name is Eiman";
console.log(str);
console.log(str[0]);
console.log(reverseString(str));
