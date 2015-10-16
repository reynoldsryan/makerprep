var name = prompt("What is your name?");
var age = prompt("What is your age?");
var gender = prompt("What is your gender?");
var isMember = prompt("Are you a member?");
var isThirsty = prompt("Are you thirsty?");

if(age < 21 || isMember !== "yes" && gender === "male") {
  document.querySelector("#greeting").textContent = "Hello sir, you may not come in.";
} else if(age < 21 || isMember !== "yes" && gender === "female") {
  document.querySelector("#greeting").textContent = "Hello ma'am, you may not come in.";
} else if (gender === "male") {
  document.querySelector("#greeting").textContent = "Welcome Mr. " + name;
  if(isThirsty === "yes") {
    var drink = prompt("What would you like to drink?");
  }
  if(drink !== "coors light") {
    document.querySelector("#drinkorder").textContent = "Yes " + name + " one " + drink + " coming right up!";
  } else {
    document.querySelector("#drinkorder").textContent = "Get out of my bar!";
  }
} else {
  document.querySelector("#greeting").textContent = "Welcome Mrs. " + name;
  if(isThirsty === "yes") {
    var drink = prompt("What would you like to drink?");
  }
  if(drink !== "coors light") {
    document.querySelector("#drinkorder").textContent = "Yes " + name + " one " + drink + " coming right up!";
  } else {
    document.querySelector("#drinkorder").textContent = "Get out of my bar!";
  }
}
