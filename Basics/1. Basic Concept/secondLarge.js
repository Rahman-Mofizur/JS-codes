function secondLargest(a, b, c) {
  if (a > b && a > c) {
    // a is the largest, So another logic should be a is the lowest
    if (b > c) {
      console.log(b + " is the 2nd largest");
    } else {
      console.log(c + " is the 2nd largest");
    }
  } else if (b > a && b > c) {
    // b is the largest, So another logic should be b is the lowest
    if (a > c) {
      console.log(a + " is the 2nd largest");
    } else {
      console.log(c + " is the 2nd largest");
    }
  } else if (c > a && c > b) {
    if (a > b) {
      console.log(a + " is the 2nd largest");
    } else {
      console.log(b + " is the 2nd largest");
    }
  } else {
    console.log("3 numbers are equal!");
  }
}
console.log("The numbers are: 10,20,30");
secondLargest(10, 20, 30);
secondLargest(10, 30, 20);
secondLargest(20, 30, 10);
secondLargest(20, 10, 30);
secondLargest(30, 10, 20);
secondLargest(30, 20, 10);
console.log("The numbers are: 10,10,10");
secondLargest(10, 10, 10);
console.log("The numbers are: 10,10,20");
secondLargest(20, 10, 10);
secondLargest(10, 10, 20);
