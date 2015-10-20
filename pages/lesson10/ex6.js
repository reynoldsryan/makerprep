function Fibonacci(position) {
  var num1 = 0;
  var num2 = 1;
  var swap = 0;
  for(i = 1; i < position; i++) {
    swap = num2;
    num2 = num2 + num1;
    num1 = swap;
  }
  return(num1);
}

console.log(Fibonacci(10));
