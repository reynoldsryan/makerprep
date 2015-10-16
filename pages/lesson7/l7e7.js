var choice1 = prompt("What do you do? Type 'get up' or 'stay in bed'.");
var improperResponse = "Overwhelmed by your choices, you have a stroke and die.";
if(choice1 === "get up") {
  document.querySelector("#choice1").textContent = "You get out of bed and stumble toward the nearest door. A man with a scalpel appears in the doorway.";
  var choice2 = prompt("What do you do? Type 'lunge at him' or 'back away slowly'.");
  if (choice2 === "lunge at him") {
    document.querySelector("#choice2").textContent = "The man stabs you with the scalpel, instantly killing you.";
  } else if (choice2 === "back away slowly") {
    document.querySelector("#choice2").textContent = "Your vision begins to clear and you recognize the man as your neurosurgeon. You remember that you are here to get a brain tumor removed.";
    var choice3 = prompt("What do you do? Type 'let the tumor take over' or 'go back to bed'.");
    if(choice3 === "let the tumor take over") {
      document.querySelector("#choice3").textContent = "You suddenly realize you are a sense8 and the 'doctor' is trying to kill you! You jump out the nearby open window into a courtyard where your sense8 cluster has just arrived to break you out. You all escape to live another day!";
    } else if (choice3 === "go back to bed") {
      document.querySelector("#choice3").textContent = "You slowly drift in to unconsciousness, as your mind screams that something is not right just as the doctor makes the first incision.";
    } else {
      document.querySelector("#choice3").textContent = improperResponse;
    }
  } else {
    document.querySelector("#choice2").textContent = improperResponse;
  }
} else if (choice1 === "stay in bed"){
  document.querySelector("#choice1").textContent = "You drift back to sleep, never to wake again.";
} else {
  document.querySelector("#choice1").textContent = improperResponse;
}
