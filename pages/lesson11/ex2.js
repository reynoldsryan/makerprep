var bucketList = [];
bucketList[0] = "go to asia";
bucketList[1] = "fly to mars";
bucketList.push("eat at french laundry", "drink a $1000 bottle of wine");
bucketList.unshift("learn to code", "go skydiving");
console.log(bucketList);
console.log(bucketList.length);
bucketList.pop();
bucketList.shift();
console.log(bucketList);
console.log(bucketList.length);

function logArray(array) {
  for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logArray(bucketList);

function reverser(array) {
  var reversedArray = [];
  for(var i = 0; i < array.length; i++) {
    reversedArray[i] = array[array.length - i - 1];
  }
  return reversedArray;
}

console.log(reverser(bucketList));
