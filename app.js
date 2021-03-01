//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  if (todoInput.value == '') {
    alert('Nothing To add')
    e.preventDefault();
  }
  else {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    //Save to local - do this last
    //Save to local
    saveLocalTodos(todoInput.value);
    //
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);

  }

}

function deleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}

function changeFontTo0() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Poppins";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Poppins";
  let v = document.getElementsByClassName("active");
  v[0].style.border = "3px solid white";
  v[1].style.border = "";
  v[2].style.border = "";
  v[3].style.border = "";
  v[4].style.border = "";
  v[5].style.border = "";

}

function changeFontTo1() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Lexend";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Lexend";
  let v = document.getElementsByClassName("active");
  v[1].style.border = "3px solid black";
  v[0].style.border = "";
  v[2].style.border = "";
  v[3].style.border = "";
  v[4].style.border = "";
  v[5].style.border = "";
}
function changeFontTo2() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Mukta";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Mukta";
  let v = document.getElementsByClassName("active");
  v[2].style.border = "3px solid purple";
  v[1].style.border = "";
  v[5].style.border = "";
  v[3].style.border = "";
  v[4].style.border = "";
  v[0].style.border = "";

}
function changeFontTo3() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Jamhuria";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Jamhuria";
  let v = document.getElementsByClassName("active");
  v[3].style.border = "3px solid green";
  v[1].style.border = "";
  v[2].style.border = "";
  v[5].style.border = "";
  v[4].style.border = "";
  v[0].style.border = "";

}
function changeFontTo4() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Rajdhani";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Rajdhani";
  let v = document.getElementsByClassName("active");
  v[4].style.border = "3px solid white";
  v[1].style.border = "";
  v[2].style.border = "";
  v[3].style.border = "";
  v[5].style.border = "";
  v[0].style.border = "";

}
function changeFontTo5() {
  let x = document.getElementsByTagName("body");
  x[0].style.fontFamily = "Lobster";
  let y = document.getElementsByTagName("select");
  y[0].style.fontFamily = "Lobster";
  let v = document.getElementsByClassName("active");
  v[5].style.border = "3px solid grey";
  v[1].style.border = "";
  v[2].style.border = "";
  v[3].style.border = "";
  v[4].style.border = "";
  v[0].style.border = "";

}