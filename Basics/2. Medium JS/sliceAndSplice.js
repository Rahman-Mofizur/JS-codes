var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.slice(0, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.splice(0, 3)); // [ 1, 2, 3 ]
console.log(array); // [ 4, 5, 6, 7, 8, 9 ]

// slice copy from 0th to 4th index.        slice(startingIndex, Endingindex-1)
// Splice cut 3 indeces from oth index.     splice( startingIndex, HowManyItemsYouWantToCut);

// splice( startingIndex, HowManyItemsYouWantToCut, You can add Items here);

console.log("\n");

var numbers = [15, 25, 35, 18, 95, 73, 65];
var partial = numbers.splice(4, 2, 55, 76, 36, 18);
console.log(partial); // [ 95, 73 ]
console.log(numbers); // [ 15, 25, 35, 18, 55, 76, 36, 18, 65 ]
