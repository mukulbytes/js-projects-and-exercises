# Todo List V3

## Watch Me Build This Project

- [Watch Here](https://youtu.be/F_MMObtLOgY?feature=shared)

## Project Overview

This version of the Todo List includes a date input for each task, allowing users to set deadlines or schedules. It also features a delete button to remove individual tasks from the list.

## Project Functionality

- **Add Todo**: Users can input a task and a date, then click "Add" to include it in the todo list.
- **Display Todos**: The tasks and their corresponding dates are displayed in a grid layout.
- **Delete Todo**: Each task has a delete button to remove it from the list.

## What I Learned

- Incorporating additional input types like date into forms.
- Implementing item deletion and dynamically updating the list.
- Using grid layout for organizing form inputs and task outputs.

## Methods Used

- **JavaScript Arrays and Objects**: `todoList` array holds objects with `task` and `date` properties.
- **DOM Manipulation**: Used `document.querySelector` to select elements and `innerHTML` to update content.
- **Event Handling**: Added delete functionality with inline `onclick` handlers and array manipulation.

## Code Overview

- **`addTodo()`**: Retrieves values from input fields, adds a new object to the `todoList` array, and calls `renderTodoList()` to update the displayed list.
- **`renderTodoList()`**: Builds HTML for each item in the `todoList` array and updates the output container. Includes a delete button for each task that removes the task from the list and re-renders it.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This project is part of my journey to master JavaScript. Stay tuned for more updates as I build more advanced projects!
