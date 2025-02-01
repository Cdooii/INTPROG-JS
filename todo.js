// Todo CRUD Management
//Array to store todos
let todos = [];

//DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list'); 

//Function to render todos
function rendTodo() {
    todoList.innerHTML((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        rendTodo();
    }
}

//Function to edit
function editTodo(index) {
    const updatedTodo = prompt('Edit your Todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        rendTodo();
    }
}

//Delete function
function deleteTodo(index) {
    if (confirm('Are you sure?')) {
        todos.splice(index, 1);
        rendTodo();
    }
}

//event listener & initial render
todoForm.addEventListener('submit', addTodo);
rendTodo();