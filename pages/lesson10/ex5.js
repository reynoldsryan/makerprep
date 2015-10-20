function thisThat(string1, string2, countUpTo, string1Num, string2Num) {
  var counter = 1;
while(counter <= countUpTo) {
  if(counter % string1Num === 0 && counter % string2Num === 0) {
    console.log(string1 + string2);
  } else if(counter % string1Num === 0) {
    console.log(string1);
  } else if(counter % string2Num === 0) {
    console.log(string2);
  } else {
    console.log(counter);
  }
  counter++;
}
}

thisThat("Happy", "Sad", 100, 10, 25);
