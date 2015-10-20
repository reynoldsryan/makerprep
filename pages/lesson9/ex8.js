var complexObject = {
  string: "I'm a string!",
  number: 42,
  array: ["all sorts of stuff", 10, true, undefined, function(){console.log("beepity-boop")}],
  fn: console.log,
  simpleObject: {name: "bob", location: "basement", happy: false}
};

console.log(complexObject.string);
console.log(complexObject.number);
console.log(complexObject.array);
console.log(complexObject.fn("hello world"));
console.log(complexObject.simpleObject);
console.log(complexObject.simpleObject.name);

for (var key in complexObject.simpleObject) {
  console.log(key + ": " + complexObject.simpleObject[key]);
}
