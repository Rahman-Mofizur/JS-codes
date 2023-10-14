function findSmall(height) {
  small = height[0];
  for (let i = 0; i < height.length; i++) {
    if (small > height[i]) {
      small = height[i];
    }
  }
  return small;
}
var heightOfMen = [189, 168, 188, 167, 153, 186, 179, 153, 156];
console.log(findSmall(heightOfMen));
