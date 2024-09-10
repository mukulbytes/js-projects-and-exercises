# Calculator Project

## Watch Me Build This Project

- [Version 1](https://youtu.be/3_N7oiJo3ag?feature=shared)
- [Version 2](https://youtu.be/-Jb8CsILqOI?feature=shared) (Added CSS)

## Project Overview

This is a simple Calculator project built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The result is dynamically displayed and the calculator state is persisted using `localStorage` to maintain the buffer between page reloads.

## Project Functionality

- **Basic Operations**: The calculator performs addition, subtraction, multiplication, and division.
- **Display Result**: The result of each operation is displayed in real-time.
- **Persistent Buffer**: The current input (calculation buffer) is saved in `localStorage` so that it remains even after refreshing the page.
- **Clear Function**: A clear button is provided to reset the calculation.

## What I Learned

- How to build a functional calculator using basic JavaScript functions like `eval()`.
- Managing state using `localStorage` to persist the calculation buffer across sessions.
- Dynamically updating the DOM to display the current result and inputs.
- Designing a simple and responsive calculator interface using CSS.

## Methods Used

- **DOM Manipulation**: Updated the displayed calculation and results using `document.querySelector` and `innerHTML`.
- **LocalStorage**: Used `localStorage` to store the ongoing calculation buffer so the user can continue after refreshing the page.
- **eval() Function**: Used `eval()` to evaluate and compute the mathematical expressions inputted by the user.
- **CSS Styling**: Styled buttons and the display for a simple, user-friendly interface with different colored buttons for numbers and operations.

## Code Overview

- The `calculationBuffer(calcBuffer)` function captures user inputs and updates the ongoing calculation buffer.
- The `evaluateCalc()` function computes the result of the current buffer using JavaScript's `eval()` and updates the display.
- The `clearCalc()` function resets the buffer and clears the result from both the UI and `localStorage`.
- The `calctoLocal()` function saves the current calculation buffer in `localStorage` to persist the state between page reloads.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
