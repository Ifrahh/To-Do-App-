const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;
let todos = [];

// Function to add a new task
const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("Write Something to add !");
    return;
  }


  const li = document.createElement("li");

  // Checkbox for marking task as completed
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener('change', toggleTaskCompletion);

  const p = document.createElement("p");
  p.textContent = inputText;
  li.appendChild(checkbox);
  li.appendChild(p);

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btn", "editBtn");
  editBtn.addEventListener('click', ()=> updateTodo('Edit',li));
  li.appendChild(editBtn);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("btn", "deleteBtn");
 deleteBtn.addEventListener('click',() => updateTodo('Delete', li));
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  inputBox.value = "";
  addBtn.value = "Add";

  todos.push(inputText);
};

// Function to toggle task completion
const toggleTaskCompletion = (event) => {
  const taskItem = event.target.closest("li");
  taskItem.classList.toggle("completed");
};

const updateTodo = (action, taskItem) => {
    if (action === 'Edit') {
      inputBox.value = taskItem.querySelector("p").textContent;
      inputBox.focus();

      if(addBtn.value = "Add"){
        addBtn.value="Edit";
      editTodo = taskItem;

      }
    } else if (action === 'Delete') {
      todoList.removeChild(taskItem);
      const index = Array.from(todoList.children).indexOf(taskItem);
      todos.splice(index, 1);
    }
  };
// Rest of the code remains the same...

addBtn.addEventListener('click', addTodo); // Add event listener to the Add button
//document.addEventListener('DOMContentLoaded', getSavedTodos);
todoList.addEventListener('click', updateTodo);