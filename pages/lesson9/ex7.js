var politicians = {
  secretaryOfState: "hillary clinton",
  potus: "barack obama",
  flotus: "michelle obama",
  vicePrez: "joe biden",
  govOfCalifornia: "jerry brown"
};

var names = "";

for (var key in politicians) {
  names += politicians[key] + " ";
}

console.log(names);

for (var key in politicians) {
  console.log(key + ": " + politicians[key]);
}

var reversePoliticianLookup = {};
for (var key in politicians) { reversePoliticianLookup[politicians[key]] = key;
  }

console.log(reversePoliticianLookup);
