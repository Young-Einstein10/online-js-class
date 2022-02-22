// Learning how the fetch API works.
/*
    API - Application Programming Interface

    The fetch API allows you to make asynchrinous requests to a server from web browsers. It has a Simple and Cleaner syntax and makes us of the Promise API in making any request.

    The return value for fetch is usually a Promise.A Promise is something  that happends at a later timw in te futre.

    Understanding Javascript Promises:- A promise has three state:-
     -- Pending
     - fulfilled
     -Rejected 
*/

const todosWrapper = document.querySelector(".todos-wrapper");

// Making a GET Request
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach((item) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = item.title;
      todosWrapper.append(todoItem);
    });
  })
  .catch((err) => err);

// Making a POST Request
fetch("https://jsonplaceholder.typicode.com/todos", {
  "Content-Type": "application/json",
  method: "POST",
  body: JSON.stringify({
    title: "Learning AvascripJAX",
    body: "This post is about learning how AJAX works in Javascript",
    userId: 4,
  }),
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => err);
