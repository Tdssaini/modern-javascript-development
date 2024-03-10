const carPrototype = {
  start: function () {
    console.log("Car starting...");
  },
  stop: function () {
    console.log("Car stopping...");
  },
};

const myCar = Object.create(carPrototype);

myCar.model = "Tesla";
myCar.year = 2022;

console.log(myCar.model);
console.log(myCar.year);
myCar.start();
myCar.stop();