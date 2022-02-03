// Objects are key - value pairs used in specifying the properties/attributes of a thing.
/*
    Objects are created using two methods in Jaavscript
    - Using Object Literals
    - Using the Contrutor Keyword
*/

// Using Literal Methods
const car = {
  name: "Toyota",
  noOfWheels: 4,
  model: "Camry",
  color: "Dark Blue",
  move: function () {
    console.log("I'm am moving");
  },
};

//  A Method is function within an object

// Dot Notation and Square Brackets are used in accessing, deleting updsting car.released = "2019";
// car.ac = true

car["ac"] = true;

delete car.color;

const lexusCar = {
  name: "lexus",
  noOfWheels: 4,
  model: "GX350",
  color: "White",
};

// A Prototype (kind of Constructor Function)
function Car(name, model, color) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.getCarDetails = function () {
    return `${this.name} ${this.model} ${this.color}`;
  };
}

const rollsRoyce = new Car("Rolls Royce", "2022", "Black");
const golf = new Car("Golf", "2409, lightblue");
const toyota = new Car("Toyota", 302, "wine");

// console.log(rollsRoyce);
// console.log(golf);
// console.log(toyota);

// Using JSON.parse and JSON.stringify

// To convert an Object to a string
const strinegedData = JSON.stringify(toyota);

console.log(strinegedData);

const parsedData = JSON.parse(strinegedData);

console.log(parsedData);
