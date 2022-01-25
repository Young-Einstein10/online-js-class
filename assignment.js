/*
- Create  a function called listHobbies.
- Declare a variable called myHobbies inside the function and assign an array containing a list of your hobbies.
- return the variable.
- invoke/call the function.

*/

function listHobbies() {
  let myHobbies = ["reading", "eating", "sleeping"];
  return myHobbies;
}

// listHobbies();

/*
***** CLASS-WORK 1 *****

- Create a function called multiplyNumbers.
- The function accepts two default parameters, num1 and num2.
- Find the product of the two parameters and assign it's result to a variable called 'product'.
- return the 'product' variable and invoke the function.
- Test your function in the browser dev tools.

*/

function multiplyNumbers(num1 = 4, num2 = 8) {
  const product = num1 * num2;
  return product;
}

// multiplyNumbers();

/*
***** CLASS-WORK 2 *****

- Create a function called sumMultiplyNumbers.
- The function accepts four default parameters, num1, num2, num3 and num4.
- Find the sum of num1 and num4 then assign the result to a variable called 'sum1'.
- Find the sum of num2 and num3 then assign the result to a variable called 'sum2'.
- Find the product of the two variables, sum1 and sum2 and assign it's result to a variable called 'product'.
- return the 'product' variable and invoke the function.
- Test your function in the browser dev tools.
*/

function sumMultiplyNumbers(num1 = 2, num2 = 5, num3 = 10, num4 = 1) {
  const sum1 = num1 + num4;
  const sum2 = num2 + num3;
  const product = sum1 * sum2;

  return product;
}

// sumMultiplyNumbers();

/*
***** Assignment 2: Due on Tuesday, 25/01/2022, 7:00AM *****

- Create a function called 'listPersonalDetails'.
- The body of the function should contain an object called 'myDetails'. The object should contain six(6) properties namely:-
  - name: a string
  - age: a number
  - phone: a string
  - address: a string
  - dob: a string representing your Date of Birth
  - hobbies: an array containing a list of your hobbies

- Now, loop through 'myDetails' object using the 'for in' loop and print each property (i.e key: value) to the browser console.
- Invoke the function

***** Assignment 2: Due on Tuesday, 25/01/2022, 7:00AM *****

*/

function listPersonalDetails() {
  const myDetails = {
    name: "David Anderson",
    age: 30,
    phone: "0812498439834",
    address: "National Stadium, Surulere, Lagos",
    dob: "21-02-2000",
    hobbies: ["reading", "sleeeping", "hiking", "dancing"],
  };

  for (const key in myDetails) {
    console.log(`${key}: ${myDetails[key]}`);
  }
}

listPersonalDetails();
