while(isNaN(n)) {
  var n = prompt("Let's play a guessing game. You will pick a number between 1 and whatever number you put down here.");
  parseInt(n);
}

var random = Math.floor((Math.random() * n) + 1);
var numTries = 1;

while (guess != random) {
  var guess = prompt("Guess a number between 1 and " + n);
  if(guess < random) {
    alert("Too low!");
  }
  if(guess > random) {
    alert("Too high!");
  }
  numTries++;
}

document.querySelector("#correct").textContent = "Correct! The number was " + random + "!";

document.querySelector("#numtries").textContent = "It took you " + numTries + " guess(es) to pick the correct number.";
