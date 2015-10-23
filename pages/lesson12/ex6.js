var returns_a_func = function () {
  var word = 'I can see inside';
  return function(){ console.log('BOOP! ' + word) };
};

var word = 'I can see outside';

var new_booper = returns_a_func();
new_booper(); // what does this log? why?

var returns_a_func = function () {
  var number = 5;
  return function(){ console.log( "The number is: " + number) };
};

var number = 4;
var fn = returns_a_func();
fn(); // what will this log? why?

var func_runner = function(func){
  var number = 3;
  func();
};

func_runner(fn); // what will this log? why?

function multipliesBy(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

var times10 = multipliesBy(10);

console.log(times10(25));
