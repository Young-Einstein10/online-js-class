// A Loop is used for performing an action that repeats itself continuosly.

/*
- for loop
- while loop
- do while loop
- for in loop
- for of loop
*/

// for loop:- this comprises of three things
// - statement
// - condition
// - increment

const shoes = [
  "Adidas",
  "Nike",
  "Fila",
  "Plaid",
  "Clutter",
  "Harry Potter and Deathly Hallows",
  "Lord of the Rings",
  "Twilight",
];

// for (let index = 0; index < shoes.length; index++) {
//   confirm(shoes[index]);
// }

// for (let index = 0; index < shoes.length; index++) {
//   alert(shoes[index]);
// }

// while loops:- A while loop is continuos as long the condion is true;

let index = 0;

// while (index < shoes.length) {
//   console.log(shoes[index]);
//   index++;
// }

// do while:-

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// for-in loop
const numObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const key in numObject) {
  console.log(`${key}: ${numObject[key]}`);
}

// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

// for-of loop
const array = ["boy", 2, 3, "life", 5, false, 7, { name: "john" }, 9, 10];

for (const value of "Hello Amigos") {
  console.log(value);
}
