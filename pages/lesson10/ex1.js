function time() {
  console.log("Hi the time is now " + new Date());
}

time();

var greeter = function() {
  return "Hello";
};

var greeting = greeter();

console.log(greeting + ", nice to meet you.");

console.log(greeter() + ", nice to meet you.");

function sayingGenerator() {
  var phrase = "Heeey, " + "it's the " + "Fonz.";
  return phrase;
}

var saying = sayingGenerator();

function brokenSayingGenerator() {
  var phrase = "Heeey, " + "it's the " + " Fonz.";
  phrase;
}

var brokenSaying = brokenSayingGenerator();

console.log(saying);
console.log(brokenSaying);
