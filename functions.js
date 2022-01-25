// Function Declaration
function displayAge(value) {
  const age = value;
  console.log(age);
}

// displayAge()

function displayBooks(book) {
  //   console.log(book);
  return book;
}

// displayAge("The Lost Sea")

let name = "Dave";

function sayHello() {
  return `Hello ${name}`;
}

// Default Parameters are usesd as backup values for parameters whenver no arguments is passed into the function
function addTwoNumbers(num1 = 3, num2 = 9) {
  return num1 + num2;
}

addTwoNumbers(); // Outputs 12
addTwoNumbers(10, 15); // Outputs 25

// Function Expression is a function without a name that's usually assigned to a variable
let sayHello = function () {
  return "Hello World";
};

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

sayHello();
