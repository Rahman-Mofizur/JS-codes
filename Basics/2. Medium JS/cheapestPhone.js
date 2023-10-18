var phones = [
  { name: "iPhone", price: 82000, color: "Gold" },
  { name: "Opp", price: 20000, color: "Silver" },
  { name: "Samsung", price: 50000, color: "Blue" },
  { name: "Huawei", price: 35000, color: "Green" },
  { name: "Nokia", price: 12000, color: "yellow" },
];
console.log(phones);
var price1 = phones[0].price;
console.log(price1);
function cheapestPhone(phone) {
  var cheapestPhoneNew = " ";
  for (let i = 0; i < phone.length; i++) {
    if (price1 > phone[i].price) {
      cheapestPhoneNew = phone[i];
    }
  }
  return cheapestPhoneNew;
}
console.log(cheapestPhone(phones));
