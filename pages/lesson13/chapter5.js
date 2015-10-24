var arrays = [[1, 2, 3], [4, 5], [6]];
var flatArray = arrays.reduce(function(a, b) {
  return a.concat(b);
}, []);
console.log(flatArray);

function each(collection, callback) {
	if(Array.isArray(collection)) {
		for(var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for(var key in collection) {
			callback(collection[key]);
		}
	}
}

function every(collection, predicate) {
  var returnVal;
  each(collection, function(currentEl) {
    if(predicate(currentEl)) {
      returnVal = true;
    } else {
      returnVal = false;
      return returnVal;
    }
  });
  return returnVal;
}

var isEven = function(number) {
  return number % 2 === 0;
};

console.log(every([2,4,6,8,10], isEven));

var some = function(collection, predicate) {
  var returnVal;
  each(collection, function(currentEl) {
    if(predicate(currentEl) === false) {
      returnVal = false;
    } else {
      returnVal = true;
      return returnVal;
    }
  });
  return returnVal;
};

console.log(some([1,3,5,7,9], isEven));
