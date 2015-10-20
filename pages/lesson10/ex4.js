function factorial(number) {
  var answer = 1;
  while(number > 0) {
    answer = answer * number;
    number--;
  }
  return answer;
}

console.log(factorial(5));

function count(countBy, countUpTo) {
var counter = 0;
while(counter < countUpTo) {
  console.log(counter += countBy);
}
}

count(25, 100);
