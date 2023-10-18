function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments); // Only works within a function and it is called as a Object [Array like Object].
}
add(55, 17, 29, 37, 81, 92);
