/*
AJAX - Asynchronous Javascript and XML. AJAX can be used in:
 
  - fetching data from a web server
  - sending data to a web server
  - updating data on webpage

Take NOte of the following:-

    - AJAX is not a programming language.
    - AJAX is a technique for accessing web servers from a web page.
    - AJAX stands for Asynchronous JavaScript And XML.
*/

var request = new XMLHttpRequest();

// GET
// POST
// PUT
// DELETE

request.open("GET", "https://jsonplaceholder.typicode.com/todos");

const todosWrapper = document.querySelector(".todos-wrapper");

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const results = JSON.parse(this.response);

    console.log(results);

    results.forEach((item) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = item.title;
      todosWrapper.append(todoItem);
    });
  }

  if (this.status !== 200) {
    alert("There was an error fetching this data");
  }
};

request.send();
