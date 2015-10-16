var startingBal = Number(prompt("Please enter your starting balance."));
var targetBal = Number(prompt("Please enter your target balance."));
var interestRate = Number(prompt("Please enter the annual interest rate."));
var years = 0;
var originalBal = startingBal;

while(startingBal < targetBal) {
  startingBal += (startingBal * interestRate * 0.01);
  years++;
}

document.querySelector("#explanation").textContent = "It will take " + years + " years to reach your target balance of $" + targetBal + " with a starting balance of $" + originalBal + " and an interest rate of " + interestRate + "%.";
