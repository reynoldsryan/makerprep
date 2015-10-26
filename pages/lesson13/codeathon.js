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

var logger = function(input) {
  console.log(input);
};

each([1,2,3], logger);

function map(collection, callback) {
  var results = [ ];
  each(collection, function(currentEl) {
    results.push(callback(currentEl));
  });
  return results;
}

var incrementor = function(currentEl) {
  return currentEl + 1;
};

console.log([1,2,3].map(incrementor));

function filter (collection, predicate) {
  var results = [ ];
  each(collection, function(currentEl) {
    if(predicate(currentEl)) results.push(currentEl);
  });
  return results;
}

function returnOdds(currentEl) {
  return currentEl % 2 !== 0;
}

console.log(filter([1,2,3], returnOdds));

function reduce(collection, callback, initialValue) {
  var accumValue, index;
  if(arguments.length >= 3) {
    accumValue = initialValue;
    index = 0;
  } else {
    accumValue = collection[0];
    index = 1;
  }
  while (index < collection.length) {
    accumValue = callback(accumValue, collection[index]);
    index++;
  }
  return accumValue;
}

function summer(previousValue, currentValue) {
  return previousValue + currentValue;
}

console.log(reduce([1,2,3], summer, 0));

var sentence = "A big cow danced over the moon.";
var lettersWithHoles = ["A", "B", "D", "O", "P", "Q", "R", "a", "b", "d", "e", "g", "o", "p", "q"];
function hasHole(letter) {
  return lettersWithHoles.indexOf(letter) > -1;
}

var filteredSentence = filter(sentence, hasHole);

console.log("There are " + filteredSentence.length + " hole(s) in your input: " + filteredSentence.join(", "));

var sidekicks = [
  {name: "Robin",           hero: "Batman"   },
  {name: "Supergirl",       hero: "Superman" },
  {name: "Fatman",          hero: "Mister America"},
  {name: "Oracle",          hero: "Batman"   },
  {name: "Doiby Dickles",   hero: "Green Lantern" },
  {name: "BatGirl",         hero: "Batman"},
  {name: "Pieface",         hero: "Green Lantern" }
];

var batmanSidekicks = filter(sidekicks, function(currentEl) {
  return currentEl.hero === "Batman";
});

console.log(batmanSidekicks);

var greenLanternSidekicks = filter(sidekicks, function(currentEl) {
  return currentEl.hero === "Green Lantern";
});

var greenLanternSidekicksNames = map(greenLanternSidekicks, function(currentEl) {
  return currentEl.name;
});

console.log(greenLanternSidekicksNames.join(", "));

var isInCollection = false;
function contains(collection, target) {
  return reduce(collection, function(previousEl, currentEl) {
    if(previousEl === target || currentEl === target) {
      isInCollection = true;
    }
    return isInCollection;
  }, isInCollection);
}

console.log(contains([1,2,3,4,5], 5));


function containsFilter(collection, target) {
  var someArray = filter(collection, function(currentEl){
    return currentEl === target;
  });
  console.log(someArray);
  if(someArray.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(containsFilter([1,2,3,4,5], 5));

var coinValue = "12 2";
var coins = coinValue.split(" ").map(Number);
var convertedValue = map(coins, function(currentEl) {
  return Math.floor(currentEl/2) + Math.floor(currentEl/3) + Math.floor(currentEl/4);
});
console.log(convertedValue);

var testNumbers = "808 2133";
var numArray = testNumbers.split(" ").map(Number);
var palindromeArray = map(numArray, function(currentEl) {
  while(currentEl <= 1000000) {
    currentEl++;
    currentEl = currentEl.toString();
    currentEl = currentEl.split("");
    var copyOfCurrentEl = currentEl.slice();
    var reverseEl = copyOfCurrentEl.reverse();
    currentEl = currentEl.join("");
    currentEl = parseInt(currentEl);
    reverseEl = reverseEl.join("");
    reverseEl = parseInt(reverseEl);
    if(currentEl === reverseEl) {
      return currentEl;
    }
  }
});

console.log(palindromeArray);

var numberOfTweets = "3";
var postClicks = "1 2 3 2 c o 1".split(" ");



function createEmptyArray(number) {
  var newArray = [ ];
  while(newArray.length < number) {
    newArray.push(0);
  }
  return newArray;
}
var startArray = createEmptyArray(numberOfTweets);

function allOpen(array) {
  return map(array, function(currentEl) {
    return 1;
  });
}

function allClosed(array) {
  return map(array, function(currentEl) {
    return 0;
  });
}

console.log(postClicks);
console.log(startArray);

each(postClicks, function(currentEl) {
  if(currentEl === "o") {
    startArray = allOpen(startArray);
  } else if (currentEl === "c") {
    startArray = allClosed(startArray);
  } else if (currentEl <= startArray.length && startArray[currentEl - 1] === 0) {
    startArray[currentEl - 1] = 1;
  } else if (currentEl <= startArray.length && startArray[currentEl - 1] === 1) {
    startArray[currentEl - 1] = 0;
  }

  console.log(startArray);
});

function getCount(array) {
  return reduce(array, function(previousEl, currentEl) {
    return previousEl + currentEl;
  }, 0);
}

console.log("Open tweets: " + startArray + ", open count = " + getCount(startArray));

function alphabetSoup(str) {
  var letters = str.split("");
  var copyofLetters = letters.slice();
  var alphabetical = map(letters, function(currentEl) {
    var lowestLetter = reduce(copyofLetters, function(previousEl, currentEl) {
      if(currentEl < previousEl) {
        return currentEl;
      } else {
        return previousEl;
      }
    });
    var index = copyofLetters.indexOf(lowestLetter);
    copyofLetters.splice(index, 1);
    return lowestLetter;
  });
  alphabetical = alphabetical.join("");
  return alphabetical;
}

console.log(alphabetSoup("supercalifragilisticexpialidocious"));
