const todoList = [];

function addTodo() {
    const todoInput = document.querySelector('.js-todo-input');

    todoList.push(todoInput.value);
    todoInput.value = '';
    console.log(todoList);
}