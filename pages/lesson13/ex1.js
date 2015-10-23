var processorSpeedsInHZ = [
  200000000, 2600000000, 2300000000, 2500000000, 2200000000, 10
];
var fastest = reduce(processorSpeedsInHZ, function(previousEl, currentEl) {
  if(currentEl > previousEl) {
    return currentEl;
  } else {
    return previousEl;
  }
});

console.log(fastest/1000000000 + " GHz");

// testArray = [1,2,3,4,5];
// function addOne(currentEl) {
// 	console.log(currentEl + 1);
// }

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

// each(testArray, addOne);

// function test(currentEl) {
// 	return currentEl;
// }

function map(collection, callback) {
	var results = [ ];
	each(collection, function(currentEl) {
		results.push(callback(currentEl));
	});
	return results;
}

// console.log(map(testArray, test));

// function isEven(currentEl) {
//   return currentEl % 2 === 0;
// }

function filter(collection, predicate) {
  var results = [];
  each(collection, function(currentEl) {
    if(predicate(currentEl)) {
      results.push(currentEl);
    }
  });
  return results;
}

// console.log(filter(testArray, isEven));

// function adder(previousEl, currentEl) {
//   return previousEl + currentEl;
// }

// function reduce(collection, callback, initialVal) {
//   var accumVal = initialVal;
//   each(collection, function(currentEl) {
//     accumVal = callback(accumVal, currentEl);
//   });
// return accumVal;
// }
//
// console.log(reduce(testArray, adder, 0));

//reduce to check if there is an initial value

function reduce(collection, callback, initialVal) {
  var accumVal, index;
  if(arguments.length >= 3) {
    accumVal = initialVal;
    index = 0;
  } else {
    accumVal = collection[0];
    index = 1;
  }
  while(index < collection.length) {
    accumVal = callback(accumVal, collection[index]);
    index++;
  }
  return accumVal;
}

// console.log(reduce(testArray, adder));

var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCm: 20.4,
  exists: true
};

each(myObj, function(currentEl){
  console.log("#" + currentEl);
});

var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];

var oneLineSea = "";
each(mySea, function(currentEl) {
  oneLineSea += (currentEl + " ");
});

console.log(oneLineSea);

var numbersR = [36, 81, 3481, 1681];
var numbersSqR = map(numbersR, function(currentEl) {
  return Math.sqrt(currentEl);
});

console.log(numbersSqR);

var mice = [
  {name: "Longtail"},
  {name: "Sharpteeth"},
  {name: "Smellypee"},
  {name: "Twinkle Fingers"}
];
var formalMice = map(mice, function(currentEl) {
  return "Mr. " + currentEl.name;
});

console.log(formalMice);

var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];
var coolPeople = filter(people, function(currentEl) {
  var nameArr = currentEl.split("");
  return nameArr.length > 6;
});

console.log(coolPeople);

var coolerPeople = filter(people, function(currentEl) {
  var nameArr = currentEl.split("");
  var ascii = map(nameArr, function(currentEl) {
    return currentEl.charCodeAt(0);
  });
  var asciiTotal = reduce(ascii, function(previousEl, currentEl) {
    return previousEl + currentEl;
  }, 0);
  if(asciiTotal < 400) {
    return currentEl;
  }
});

console.log(coolerPeople);

var number = 5, counter = 1;
var upToNumber = [];
while(counter <= number) {
  upToNumber.push(counter);
  counter++;
}
var factorial = reduce(upToNumber, function(previousEl, currentEl) {
  return previousEl * currentEl;
});

console.log(factorial);
