function tripler(num) {
  return num * 3;
}

console.log(tripler(10));

function multiply(num1, num2) {
  return num1  * num2;
}

console.log(multiply(4, 5));

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(100, 25));

function remainder(num1, num2) {
  return num1 % num2;
}

console.log(remainder(15, 4));

console.log(remainder(divide(multiply(tripler(5), 12), 2), 3));
console.log(tripler(remainder(multiply(divide(9, 3), 5), 4)));
