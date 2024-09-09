# Variables - Lesson 5 Exercises

This repository showcases my solutions to **Lesson 5** of the JavaScript Basics. These exercises focus on using variables to store data and perform operations. I also explored more advanced concepts like incrementing and decrementing values in projects.

## Exercise Questions

### Note: to do these exercises, create an HTML file (like 5a.html, 5b.html, ...)

### 5a. Create a `<script>` element. Inside the `<script>`, create a variable called 'name', and save your name in this variable (as a string).

### 5b. Continuing from 5a, display the message 'My name is: $(name)' in the console (insert the 'name' variable created in 5a into this message).

### 5c. At a restaurant, you order 1 coffee ($5), 2 bagels ($3 each), and 1 soup ($9). Calculate the cost and save it in a variable called 'cost'.

### 5d. Continuing from 5c, display 'Cost of food: $$(cost)' in the console.

### 5e. Let's say the restaurant charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.

### 5f. Continuing from 5e, display 'Tax (10%): $$(tax)' in the console.

### 5g. Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $$(totalCost)' in the console.

### 5h. In the Cart Quantity project  [(Code)](https://github.com/mukulbytes/js-projects-and-exercises/tree/master/Projects/Cart%20Quantity%20Project/Previous%20Versions/Cart%20Quantity%20V1) / [(Live)](https://supersimple.dev/projects/variables/), add 2 more buttons '+4' and '+5', which increase the quantity by 4 and 5 when you click them. Try using `+=`.

### 5i. In the Cart Quantity project [(Code)](https://github.com/mukulbytes/js-projects-and-exercises/tree/master/Projects/Cart%20Quantity%20Project/Previous%20Versions/Cart%20Quantity%20V1) / [(Live)](https://supersimple.dev/projects/variables/), add a button 'Remove from cart', which decreases the cart quantity by 1.

### 5j. Add 2 buttons '-2' and '-3', which decrease the quantity by 2 and 3.

### 5k. Use the shortcuts `--` and `-=` in 5i and 5j.

---

## Challenge Exercises

We'll build a calculator (don't worry, we'll do it step by step).

1. Go to [supersimple.dev/projects/calculator](https://supersimple.dev/projects/calculator) in your browser.
2. Open the Console and click the calculator buttons to see how it works.

### Setup: create a new file `calculator.html` for this project.

### 5l. Add the HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`). Add a `<title>` with the text 'Calculator'.

### 5m. Create these 5 buttons:

![Calculator-Buttons](https://i.imgur.com/uVEIwBw.png)

### 5n. Create a `<script>`, create a variable called 'calculation', and save an empty string inside: `let calculation = ""` (This variable will store the calculation like '1 + 2' or '11 + 2 + 2').

### 5o. When we click the '1' button:

- Add the string '1' to the calculation variable: `calculation += '1';`
- Display the calculation in the console: `console.log(calculation);`

### 5p. Do the same for the '2', '3', and '+' buttons (add ' + ' instead of '+').

### 5q. When we click the '=' button, use the code: `eval(calculation);`

- Save the result back in 'calculation': `calculation = eval(calculation);`
- Display the result in the console: `console.log(calculation);`

### 5r. Create the rest of the buttons in the calculator. To create multiple rows of buttons, put the buttons inside `<p>` elements like this:

```html
<p>
  <button>1</button>
  <button>2</button>
</p>
<p>
  <button>4</button>
  <button>5</button>
</p>
```

---

## My Solution

In this exercise, I worked on using variables in JavaScript to store and manipulate data. This included using basic operators for calculations, displaying results in the console, and working with increment and decrement operations. The challenge exercise also gave me the opportunity to build a basic calculator with interactive buttons.

**Watch my solution here:**

[JavaScript Variables: Solving Key Exercises and Challenges | Exercise 5](https://youtu.be/VNdtgAQeMbk)

---

## Key Takeaways

- Practiced using variables to store and calculate values.
- Learned to display messages and variables in the console.
- Built a basic calculator using HTML, CSS, and JavaScript.
- Enhanced understanding of increment and decrement operations.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-05)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
