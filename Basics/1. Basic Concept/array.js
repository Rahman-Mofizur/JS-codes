// Adding Array items from beginning:
var country = [
  "Singapure",
  "Australia",
  "New Zealand",
  "Malaysia",
  "Saudi Arabia",
  "Germany",
];
console.log(country);

// Push, pop
country.pop();
country.push("UAE");
console.log(country);

// Shift, unshift
country.shift();
country.unshift("Canada");
console.log(country);

// Slice
var selectedCountry = country.slice(1, 4);
console.log(selectedCountry);

// Ans: selectedCountry = [ 'Australia', 'New Zealand', 'Malaysia' ]

// String array
var celebrityNews = "Ariana Grande is singing a song";
var newsWord = celebrityNews.includes("Grande");
console.log(newsWord);
var nameOfGrande = celebrityNews.substring(0, 13);
console.log(nameOfGrande);
