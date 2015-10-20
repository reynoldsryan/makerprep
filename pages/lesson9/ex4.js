var demoObject = {
  one: 1,
  two: 2,
  three: 3
};

var one = "three";

console.log(demoObject["two"]);
console.log(demoObject[one]);

var stateCapitals = {
  California: "Sacramento",
  Texas: "Austin"
};

var place = "California";

console.log(stateCapitals["place"]);
console.log(stateCapitals.place);
console.log(stateCapitals[place]);

console.log(stateCapitals["California"]);
console.log(stateCapitals.California);
console.log(stateCapitals[California]);
