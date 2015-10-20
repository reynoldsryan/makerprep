function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

var newRandomNumber = randomNumber();

console.log(newRandomNumber);
console.log(randomNumber());

console.log("---------------");

var counter = 0;
while (counter < 10) {
  console.log(randomNumber());
  counter++;
}

console.log("---------------");

function valueLogger(value) {
  console.log(value);
}

valueLogger("Howdy");

valueLogger(3 + 7);

valueLogger(3, 7);

function doubler (num) {
  return num * 2;
}

var product = doubler(5);
console.log(product);

function doubleValueLogger(value1, value2) {
  console.log(value1, value2);
}

doubleValueLogger("Hey", "what's up");

doubleValueLogger("Hey");

function add(num1, num2) {
  return num1 + num2;
}

var sum = add(7, 18);
console.log(sum);
