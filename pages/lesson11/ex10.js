function helloArray(array) {
  for(i = 0; i < array.length; i++) {
    if(array[i] === "hello") {
      return true;
    }
  }
  return false;
}
var trueArray = [4, "hello", false, 4, 4, "howdy"];
var falseArray = [5, "no", 87, true];
console.log(helloArray(trueArray));
console.log(helloArray(falseArray));

function targetArray(array, target) {
  var counter = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i] === target) {
      counter++;
    }
  }
  return counter;
}
console.log(targetArray(trueArray, 4));
console.log(targetArray(falseArray, 4));

function oddArray(array) {
  newArray = [];
  for(i = 1; i < array.length; i+= 2) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(oddArray(trueArray));

function sumArray(array) {
  var sum = 0;
  for(i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
var numArray1 = [3,16,4,27];
console.log(sumArray(numArray1));

function mathArray(array, operator) {
  if(operator === "+") {
    var sum = 0;
    for(i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  if(operator === "-") {
    var minus = array[0];
    for(i = 1; i < array.length; i++) {
      minus -= array[i];
    }
    return minus;
  }
  if(operator === "*") {
    var product = 1;
    for(i = 0; i < array.length; i++) {
      product *= array[i];
    }
    return product;
  }
  if(operator === "/") {
    var divide = array[0];
    for(i = 1; i < array.length; i++) {
      divide /= array[i];
    }
    return divide;
  }
}
var numArray2 = [1,2,-8,50];
console.log(mathArray(numArray2, "/"));

function zipper(array1, array2) {
  var newArray = [];
  for(i = 0; i < array1.length || i < array2.length; i++) {
    if(array1[i] !== undefined){
      newArray.push(array1[i]);
    }
    if(array2[i] !== undefined){
      newArray.push(array2[i]);
    }
  }
  return newArray;
}
console.log(zipper(trueArray, falseArray));

function sortNumber(a,b) {
  return a - b;
}
function mergeSorted(array1, array2) {
  array1.sort(sortNumber); //sort by itself doesnt work with numbers
  array2.sort(sortNumber);
  var outputArray = array1.concat(array2);
  return outputArray.sort(sortNumber);
}
console.log(mergeSorted(numArray1, numArray2));

var testArray = [2,4,6,8,10,12];
function shuffler(array) {
  var newArray = [];
  array.forEach(function(currentElement) {
    var position = Math.floor(Math.random() * array.length);
    newArray.splice(newArray[position], 0, currentElement);
  }
);
return newArray;
}
console.log(shuffler(testArray));
