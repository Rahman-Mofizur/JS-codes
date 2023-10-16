function discount(tickets) {
  var ticketPrice = 100;
  var sum = 0;
  if (tickets > 0) {
    if (tickets <= 100) {
      sum = ticketPrice * tickets;
    } else if (tickets <= 200) {
      var sum1 = ticketPrice * 100;
      var sum2 = (ticketPrice - 10) * (tickets - 100);
      sum = sum1 + sum2;
    } else {
      var sum1 = ticketPrice * 100;
      var sum2 = (ticketPrice - 10) * 100;
      var sum3 = (ticketPrice - 20) * (tickets - 200);
      sum = sum1 + sum2 + sum3;
    }
    return sum;
  } else {
    return false;
  }
}

console.log(discount(0));
console.log(discount(15));
console.log(discount(150));
console.log(discount(250));
console.log(discount(500));
