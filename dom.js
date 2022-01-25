// DOM - Document Object Model

/*
Benefits of using the Javascript DOM
- With the DOM, javascript can change all the HTML elements in a webpage
- Chnaging HTMl attribute
- Change CSS Styling using the DOM
- Ability to add and remove new elements from the DOM
*/

/*
- getElementById
- getElementByClassName
- getElementByTagName
- querySelecetor
- querySelectorAll
*/

// Selecting an element with an ID: use getElementById
const locationEl = document.getElementById("location");

// Selecting an element with a class: use getElementByClassName
const wrapper = document.getElementsByClassName("wrapper");

// Selecting an element with either a classname, id or attribute
const address = document.querySelector(".wrapper .address");

const title = document.querySelector(".title");
const loginBtn = document.querySelector(".login-btn");

// Styling Using Javascript
title.style.color = "green";
title.style.textAlign = "center";
title.style.backgroundColor = "yellow";

// Changing Content Using Javascript
address.textContent = "25, Montgomery Road, Yaba, Lagos State.";
address.style.padding = "1rem";
address.style.fontSize = "20px";
address.style.textDecoration = "underline";
address.style.backgroundColor = "aliceblue";

// Styling the Button
loginBtn.style.height = "40px";
loginBtn.style.backgroundColor = "cyan";
loginBtn.style.border = 0;
loginBtn.style.borderRadius = "10px";
loginBtn.style.padding = "0 1rem";
loginBtn.style.fontSize = "18px";
loginBtn.style.padding = "0 1.5rem";
loginBtn.style.cursor = "pointer";
loginBtn.textContent = "Signin";

// Changing Content

loginBtn.textContent = "Signin";
