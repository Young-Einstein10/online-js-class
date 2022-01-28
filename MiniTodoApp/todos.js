const form = document.querySelector("form");
const todosInput = document.querySelector("input#todoInput");
const addTodosBtn = document.querySelector(".add-btn");
const todosWrapper = document.querySelector("ul.todos-wrapper");

// Add Event Listener to Form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  todosWrapper.insertAdjacentHTML(
    "beforeend",
    `
      <li class="todo-item">
          <input type="checkbox" />

          ${todosInput.value}  
      </li>
    `
  );

  //   const todoItem = document.createElement("li");
  //   todoItem.className = "todo-item";

  //   // Adding Children to list-item
  //   const input = document.createElement("input");
  //   input.type = "checkbox";

  //   todoItem.appendChild(input);
  //   todoItem.append(todosInput.value);

  //   todosWrapper.appendChild(todoItem);

  //   Clear Value of TodosInput after submitting form
  todosInput.value = "";
});
