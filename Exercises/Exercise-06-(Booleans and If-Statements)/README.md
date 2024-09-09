# Booleans and If-Statements - Lesson 6 Exercises

This repository showcases my solutions to **Lesson 6** of the JavaScript Basics. These exercises focus on using Booleans and If-Statements to control the flow of the program. I also worked on incorporating these concepts into more complex scenarios, including project improvements.

## Exercise Questions

### Note: to do these exercises, create an HTML file (like 6a.html, 6b.html, ...)

### 6a. Create a `<script>` element. Inside the `<script>`, create a variable called `hour` and save the current hour of the day (use 24-hour format and save it as a number between 0 and 23).

- If `hour` is between 6 and 12, display "Good morning!" in the console.
- If `hour` is between 13 and 17, display "Good afternoon!" in the console.
- Otherwise, display "Good night!" in the console.

### 6b. Continuing from 6a, try changing the value in the `hour` variable to make it display different messages.

### 6c. Continuing from 6a, create a variable called `name` and save your name inside (as a string). Update the if-statement to display your name in each message. For example: `"Good morning $(name)"`.

### 6d. Imagine an amusement park that has a discount for children (16 years and younger) or seniors (65 years and older).

- Create a variable `age` and save a person's age inside.
- Create an if-statement that checks if the person qualifies for a discount.
- If they do, display "Discount" in the console. Otherwise, display "No discount" in the console.<br> Note: Try to use the `||` operator in your solution.
- Try changing the 'age' variable to display different messages.

### 6e. Continuing from exercise 6d, let's say the discount is only available if it is not a holiday. Create a variable: `const isHoliday = true;`

- Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
- Note: `&&` has a higher priority than `||` so you may need to use brackets `()` to control which code gets done first.
- Try changing the value of 'isHoliday' variable to display different messages.

---
### We'll create a coin-flip game ( create 1 HTML file for exercise 6f - 6j):
---
### 6f. Generate a random number using `Math.random()`. Save it in a variable.

### 6g. Create an if-statement and check:

- If the number is less than 0.5, then display "heads" in the console.
- Else display "tails" in the console.

### 6h. Instead of displaying "heads" or "tails" in the console, save the result in a variable called `result`.

### 6i. Let's say we're trying to guess the result. Create a variable called `guess` and save your guess ("heads" or "tails").

- If your guess matches the result, display "You win!" in the console.
- If your guess does not match the result, display "You lose!".

### 6j. (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition ? A : B).

---

## Challenge Exercises

Setup: We'll improve the Cart Quantity project. (If you didn't do 5k, [check the solutions](https://github.com/mukulbytes/js-projects-and-exercises/blob/master/Exercises/Exercise-5-(Variables)/5h%20-%205k%20(Cart%20Quantity).html))

### 6k. Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10:

- If it will, display a popup saying "The cart is full" and don't update the quantity.
- Otherwise, update the quantity and `console.log()` it as usual.

### 6l. In exercises 5i-5k, we created the "Remove from cart", "+", and "-" buttons. Before updating the quantity, check if it will go below 0:

- If it will, create a popup saying "Not enough items in the cart" and don't update the quantity.
- Otherwise, update the quantity and `console.log()` it as usual.

---

## My Solution

In this exercise, I worked on using Booleans and If-Statements to control program flow based on various conditions. I also incorporated these concepts into project improvements, such as handling quantity limits in the Cart Quantity project.

**Watch my solution here:**

[JavaScript Booleans and If-Statements: Solving Key Exercises and Challenges | Exercise 6](https://youtu.be/haDz-g7PYFk?feature=shared)

---

## Key Takeaways

- Practiced using Booleans and If-Statements to control program flow.
- Learned to handle conditions for displaying messages and making decisions.
- Improved a project to handle edge cases with quantity limits.
- Enhanced understanding of ternary operators for concise conditional logic.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-06)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
