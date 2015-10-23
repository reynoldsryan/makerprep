var number = 50;

function adds10(number) {
  console.log(number + 10);
}

adds10(number);
console.log(number);

function leakyAdds10() {
  console.log(number += 10);
}

leakyAdds10(number);
console.log(number);
