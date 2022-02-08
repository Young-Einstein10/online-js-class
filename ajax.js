/*
AJAX - Asynchronous Javascript and XML. AJAX can be used in:
 
  - fetching data from a web server
  - sending data to a web server
  - updating data on webpage

Take NOte of the following:-

    - AJAX is not a programming language.
    - AJAX is a technique for accessing web servers from a web page.
    - AJAX stands for Asynchronous JavaScript And XML.


    Example: We're trying to find the average of 4 numbers

    Add all numbers togeter
    Divide the sum of all the number by the number of time each number occurs

    10, 12, 20, 15

    10 + 12 + 20 + 15 = 57 

    57 / 4
*/

// Making a GET Request
const request = new XMLHttpRequest();

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

// request.send();

const btnMakeRequest = document.querySelector(".btn-make-request");

// Making a POST Request
function makePostRequest() {
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");

  const dataToSend = JSON.stringify({
    title: "Learning AvascripJAX",
    body: "This post is about learning how AJAX works in Javascript",
    userId: 4,
  });

  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status >= 200) {
      const results = JSON.parse(this.response);

      console.log(results);
    }

    // if (this.status !== 200) {
    //   alert("There was an error fetching this data");
    // }
  };

  request.send(dataToSend);
}

btnMakeRequest.addEventListener("click", makePostRequest);
