function biggestSmallest(arrayOfNums) {
var biggest = 0;
var smallest = 0;
  for(i = 0; i < arrayOfNums.length; i++) {
    if(arrayOfNums[i] > biggest) {
      biggest = arrayOfNums[i];
    }
    if(arrayOfNums[i] < smallest) {
      smallest = arrayOfNums[i];
    }
  }
  var newArray = [smallest, biggest];
  return newArray;
}

var inputArray = [78, -4, 32, 101, 24];
console.log(biggestSmallest(inputArray));
