var words = ["Maybe", "Definitely", "Not likely", "Absolutely"];

function magicEightBall() {
  var userInput;
  while(!userInput) {
    userInput = prompt("Ask me anything!");
  }
    var response = words[Math.floor(Math.random() * words.length)];
    return response;
  }

console.log(magicEightBall());

// noprotect
