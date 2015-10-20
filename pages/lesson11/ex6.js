function arrayDuplicator(inputArray) {
  var outputArray = inputArray.slice();
  return outputArray;
}

var original = [1,2,3,4];
var duplicated = arrayDuplicator(original);

duplicated.pop();
duplicated.pop();
duplicated.pop();

console.log(original, duplicated);

function arrayCombiner(array1, array2) {
  var outputArray = array1.concat(array2);
  return outputArray;
}

console.log(arrayCombiner([1,2,3], [4,5,6]));

function arrayPlucker(array, index) {
  var removedValue = array.splice(index, 1);
  return removedValue;
}

console.log(arrayPlucker(original, 0));
