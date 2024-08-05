import store from "./store.js";
import { addTodo, removeTodo, toggleTodo } from "./actions.js";

// UI elements
const newTodoInput = document.getElementById("new-todo");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to render the to-do list
const render = () => {
  const state = store.getState();
  todoList.innerHTML = "";

  state.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) {
      li.classList.add("completed");
    }

    // Add a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      store.dispatch(removeTodo(todo.id));
    });

    // Add a toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = todo.completed ? "Undo" : "Complete";
    toggleButton.addEventListener("click", () => {
      store.dispatch(toggleTodo(todo.id));
    });

    li.appendChild(toggleButton);
    li.appendChild(removeButton);
    todoList.appendChild(li);
  });
};

// Initial render
render();

// Subscribe to store updates
store.subscribe(render);

// Add to-do button event listener
addTodoButton.addEventListener("click", () => {
  const text = newTodoInput.value.trim();
  if (text) {
    store.dispatch(addTodo(text));
    newTodoInput.value = "";
  }
});
