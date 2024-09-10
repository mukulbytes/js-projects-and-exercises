const todoList = JSON.parse(localStorage.getItem('todo')) || [];
renderTodoList();
function addTodo() {
  const todoInput = document.querySelector('.js-todo-input');
  const todoDate = document.querySelector('.js-todo-date');
  todoList.push({ task: todoInput.value, date: todoDate.value });
  toLocal(todoList);
  todoInput.value = '';
  renderTodoList();
}

function renderTodoList() {
  const todoOutput = document.querySelector('.js-todo-output');

  let renderBuffer = '';
  for (let i = 0; i < todoList.length; i++) {
    renderBuffer +=
      `<p class="todo-task-output">${todoList[i].task}</p><p>${todoList[i].date}</p class="todo-date-output"><button class="js-todo-delete todo-delete" onclick="
            todoList.splice(${i},1)
            toLocal(todoList);
            renderTodoList();">Delete</button>
        `
  }
  todoOutput.innerHTML = renderBuffer;
}

function toLocal(arr) {
  localStorage.setItem('todo', JSON.stringify(todoList));
}