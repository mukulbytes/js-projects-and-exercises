# DOM Projects

## Watch Me Build This Project

- [Version 1](https://youtu.be/VHhLJw6MSJs?feature=shared)
## Project Overview

This project includes two features demonstrating basic DOM manipulation:

1. A "Subscribe" button that toggles between "Subscribe" and "Subscribed".
2. A simple shipping calculator that adds a $10 shipping fee for orders under $40 and offers free shipping for orders over $40.

## Project Functionality

### Subscribe Button:

- **Initial State**: Displays "Subscribe" on the button.
- **Toggled State**: Clicking the button toggles the text between "Subscribe" and "Subscribed".

### Amazon Shipping Calculator:

- **Input**: User enters the cost of an order.
- **Shipping Calculation**:
  - If the order is less than $40, $10 shipping is added.
  - If the order is $40 or more, shipping is free.
- **Error Handling**: Displays an error message for invalid input (e.g., negative values).

## What I Learned

- How to use the `innerText` property to toggle button text dynamically.
- Input validation and error handling with DOM manipulation.
- Basic conditional logic for calculations and dynamically updating HTML content.

## Methods Used

- **DOM Manipulation**: Used `document.querySelector` to select elements and modify their content using `innerText` and `innerHTML`.
- **Conditional Logic**: Implemented checks for valid inputs and used conditional logic for different output scenarios.
- **CSS Classes**: Added and removed classes to dynamically style elements, such as displaying error messages in red.

## Code Overview

- **`changeBtnStatus()`**: Toggles the button text between "Subscribe" and "Subscribed".
- **`calculate()`**: Handles the shipping cost calculation based on the input value, and manages error handling for negative values.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
