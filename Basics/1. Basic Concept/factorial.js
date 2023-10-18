function factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
let factorialNumber = factorial(5);
console.log(factorialNumber);

// Recursive Function: A Function that can call itself

function factorial2(num2) {
  if (num2 === 0 || num2 === 1) {
    return 1;
  } else {
    return num2 * factorial2(num2 - 1);
    // Step 1: 5 * factorial(4)         = 5
    // Step 2: 5 * (4 * factorial(3))            = 20
    // Step 3: 5 * 4 * (3 * factorial(2))               = 60
    // Step 4: 5 * 4 * 3 * (2 * factorial(1))           = 120
    // Step 5: 5 * 4 * 3 * 2 * (1 * factorial(0))
  }
}
let factorialNumber2 = factorial2(4);
console.log(factorialNumber2);
