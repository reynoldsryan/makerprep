var userInput = prompt("Please enter R, P or S");
while(userInput !== "R" && userInput !== "P" && userInput !== "S") {
  userInput = prompt("Please enter R, P or S");
}

var computerChoice = Math.random();
if(computerChoice <= 0.33) {
  computerChoice = "R";
  document.querySelector("#computerChoice").textContent = "Computer chooses rock!";
} else if(computerChoice > 0.33 && computerChoice <= 0.67) {
  computerChoice = "P";
  document.querySelector("#computerChoice").textContent = "Computer chooses paper!";
} else {
  computerChoice = "S";
  document.querySelector("#computerChoice").textContent = "Computer chooses scissors!";
}

if(userInput === "R" && computerChoice === "R" || userInput === "P" && computerChoice === "P" || userInput === "S" && computerChoice === "S" ){
  document.querySelector("#outcome").textContent = "It's a tie!";
} else if(userInput === "R" && computerChoice === "P" || userInput === "P" && computerChoice === "S" || userInput === "S" && computerChoice === "R") {
  document.querySelector("#outcome").textContent = "You lose!";
} else {
  document.querySelector("#outcome").textContent = "You win!";
}
