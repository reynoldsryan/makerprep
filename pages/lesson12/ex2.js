function answerCollector(functionsArray) {
  var resultsArray = [];
  functionsArray.forEach(function(currentElement) {
    resultsArray.push(currentElement());
  });
  return resultsArray;
}

var fn1 = function() {
  return "this should be the first value";
};

console.log(answerCollector([fn1, function(){return "this should be the second value"}]));
