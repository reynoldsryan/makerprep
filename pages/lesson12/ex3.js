var returns_a_func = function () {
  return function(){ console.log('BOOP!') };
};

// have we booped yet?
var booper = returns_a_func();

// how about now?
booper();

booper();
booper();
booper();


function addFive() {
  return function(number) {
    return 5 + number;
  };
}

var addFiver = addFive();
console.log(addFiver(5));
console.log(addFiver(3));
