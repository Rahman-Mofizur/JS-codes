// var names = ["Mofiz", "Farzana", "Abdullah", "Tasnim"];
// for (const name of names) {
//   console.log(name);
// }

var products = [
  { name: "Walton phone", price: 20000 },
  { name: "Huawei notebook laptop", price: 120000 },
  { name: "I phone", price: 140000 },
  { name: "Samsung S25 phone", price: 55000 },
  { name: "Macbook Air laptop", price: 22000 },
  { name: "Hp probook laptop", price: 80000 },
];
function findLaptop(laptops, search) {
  var laptopFromStrore = [];
  for (let laptop of laptops) {
    if (laptop.name.includes(search) === true) {
      laptopFromStrore.push(laptop.name);
    }
  }
  return laptopFromStrore;
}
console.log(findLaptop(products, "laptop"));

// Consept_2

function findPhones(phones, search) {
  var phonesInProducts = [];
  for (const phone of phones) {
    // console.log(phone);
    // console.log(phone.name);
    // console.log(phone.name.includes(search));
    if (phone.name.includes(search) === true) {
      phonesInProducts.push(phone.name);
    }
  }
  return phonesInProducts;
}
console.log(findPhones(products, "phone"));
