// var global_variable = 'Hello world!';
//
// function just_a_regular_function() {
//   var local_variable = 'Hello local scope!'
//   console.log(local_variable);
// }
//
// // print 'Hello world!'
// console.log(global_variable);
//
// // prints undefined
// console.log(local_variable);
//
// // prints 'Hello local scope!'
// just_a_regular_function();

var word = "original";
var phrase = " is the word";
var newWord = "changed";

var wordChanger = function(newWord) {
  var word = newWord;
  console.log(word + phrase);
};

var leakyWordChanger = function(newWord) {
  word = newWord;
  console.log(word + phrase);
};

console.log(word + phrase);
console.log(newWord + phrase);

wordChanger(newWord);

console.log(word + phrase);
console.log(newWord + phrase);

leakyWordChanger(newWord);

console.log(word + phrase);
console.log(newWord + phrase);

function secretKeeper(string1, string2) {
  var secretWord = "bunny";
  console.log(string1 + " " + secretWord + " " + string2);
}

// console.log(secret);

secretKeeper("hi", "bye");
