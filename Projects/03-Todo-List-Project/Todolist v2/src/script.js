const todoList = [];

function addTodo() {
    const todoInput = document.querySelector('.js-todo-input');

    todoList.push(todoInput.value);
    todoInput.value = '';
    renderTodoList();
}

function renderTodoList() {
    const todoOutput = document.querySelector('.js-todo-output');

    let renderBuffer = '';
    for (let i = 0; i < todoList.length; i++) {
        renderBuffer += `<p>${todoList[i]}</p>`
    }
    todoOutput.innerHTML = renderBuffer;
}