var say_hi = function () {
  console.log('hi');
};

var greeter = say_hi;

//both of these should console log 'hi'
say_hi();
greeter();

say_hi = function () {
  console.log('meh');
};

//What will this do? Try it out!
say_hi(); // ??
greeter(); // ??

var runner = function (fn) {
  console.log('Invoking a function now!');
  // a function that was passed as an argument to another function is called a CALLBACK
  fn();
};

//This is an example of an anonymous function; more on that in a minute
runner( function(){ console.log('okay') } );
runner(say_hi);
runner(greeter);

//Make sure you understand this one
// runner( say_hi()); // ??

function answerLogger(callback) {
  callback();
  console.log(callback());
}

answerLogger(function(){
  return "I should be console logged.";
});
