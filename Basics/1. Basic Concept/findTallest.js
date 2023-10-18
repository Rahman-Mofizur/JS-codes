function findTallest(height) {
  var tall = height[0];
  for (let i = 1; i < height.length; i++) {
    if (tall < height[i]) {
      tall = height[i];
    }
  }
  return tall;
}
var heightOfPeople = [168, 170, 182, 156, 165, 159, 170, 199];
console.log(findTallest(heightOfPeople));
