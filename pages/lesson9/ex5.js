var car = {};

car.make = "Mazda";
car.model = "Miata";
car.color = "red";
car.year = 2013;
car.registered = true;

var type = "make";
console.log(car.year);
console.log(car[type]);
console.log(car["make"]);

for(var key in car) {
  console.log(key + ": " + car[key])
};

for(var key in car) {
  if(key === "color") {console.log(car[key])
                      }
};

var targetKey = "year";
for(var key in car) {
  if(key === targetKey) {console.log(car[key])
                      }
};
