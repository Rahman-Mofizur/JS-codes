// Problem: 5

function canPay(changeArray, totalDue) {
  if (changeArray.length > 0) {
    var sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please, Enter the array numbers";
  }
}
var moneyArray = [10];
var chipsPrice = 10;
console.log(canPay(moneyArray, chipsPrice));
var moneyArray = [1, 2, 5];
var chipsPrice = 10;
console.log(canPay(moneyArray, chipsPrice));
var moneyArray = [5, 1, 5];
var chipsPrice = 10;
console.log(canPay(moneyArray, chipsPrice));
// canPay(moneyArray, chipsPrice);
