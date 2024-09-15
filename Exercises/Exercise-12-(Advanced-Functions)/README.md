# Advanced Functions - Lesson 12 Exercises

This repository showcases my solutions to **Lesson 12** of the JavaScript Basics course. These exercises focus on advanced functions, including the use of `setTimeout`, `setInterval`, arrow functions, and creating modifications to a Rock Paper Scissors game.

## Exercise Questions

### 12a. Create a variable called ‘add' and save a function inside. This function will console.log(2 + 3); Run the function twice.

### 12b. Continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.

- runTwice(function() { console.log('12b'); }); => console.log('12b') twice
- runTwice(add); => console.log(5) twice

### 12c. Create the button below. When clicking the button, after 1 second, the text inside the button changes to 'Finished!'.

### (Hint: use setTimeout() and the DOM)

<img src="https://i.imgur.com/uD2lGd5.png" height=70px>

### 12d. Continuing from exercise 12c, modify the button so that when we click it, the text immediately changes to 'Loading...', and then after 1 second, it changes to 'Finished!'.

<img src="https://i.imgur.com/uD2lGd5.png" height=70px>

### 12e. Create the 'Add to cart' button below. When clicking this button, display the message 'Added' below the button. Then, after 2 seconds, remove the message.

<img src="https://i.imgur.com/d6ceqKX.png" height=70px>

---

## Challenge Exercises

### 12f. Continuing from 12e, if we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon).

- Modify the code so when we click the button, it "refreshes” the 2 second wait time (waits for 2 seconds again and removes message).
- Hint: you can cancel the previous setTimeout using clearTimeout()

<img src="https://i.imgur.com/S55mKet.png" height=120px>

### 12g. Imagine we're creating a messaging app. Use setInterval() and document.title to create the feature below (the title changes every 1 second).

<img src="https://i.imgur.com/aalskG4.png" height=65px>

### 12h. Continuing from 12g, instead of displaying “(2) New messages" every time, save the number of messages in a variable: let messages = 2;

- Use the number in the variable to determine what title to display.
- Create 2 buttons 'Add' / 'Remove' that increase/decrease the 'messages' variable by 1.

<img src="https://i.imgur.com/OrMHxH9.png" height=100px>

### 12i. Continuing from 12h:

- Don't let 'messages' go below 0.
- If messages === 0 stop changing the title and display 'App' as the title.
- When messages > 0 start changing the title again.

---

## Lesson 12 Exercises - Advanced Functions

### 12j. Create an arrow function called 'multiply' that takes 2 numbers, multiplies them together, and returns the result.

- multiply(2, 3) => 6
- multiply(7, 10) => 70

### 12k. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise).

### 12l. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using .forEach() instead of a loop.

- countPositive([1, -3, 5]) => 2
- countPositive([-2, 3, -5, 7, 10]) => 3

### 12m. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'. Create this function using .map() instead of a loop.

- addNum([1, 2, 3], 2) => [3, 4, 5]
- addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
- Bonus: try to use the one-line shortcut in your solution.

### 12n. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using .filter() instead of a loop.

- removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']

### 12o. Update exercise 12n to only remove the first 2 eggs from the array. Again, use .filter() instead of a loop.

- removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']

### 12p. Go back to the earlier exercises in lesson 12 (12c - 12i) and switch the code to use arrow functions. (When passing a function into another function, use arrow functions. Otherwise, you can use either syntax.)

### 12q. Go back to the earlier exercises in lesson 12 (12c - 12i) and instead of using onclick="...", switch the code to use .addEventListener('click', ...)

---

## Challenge Exercises

### The following exercises will build on the Rock Paper Scissors game.

### 12r. Make a copy of the Rock Paper Scissors game => ([html](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/12-rock-paper-scissors.html)) ([css](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/styles/12-rock-paper-scissors.css)) ([js](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/scripts/12-rock-paper-scissors.js)) into the files 12r.html, 12r.css, and 12r.js.

- Update the `<link>` and `<script>` elements to load 12r.css and 12r.js.

- Also, make a copy of the images and make sure they load properly.

### 12s. Update the 'Auto Play' button to use .addEventListener('click', ...) instead of onclick="..."

### 12t. Update the 'Auto Play' button so that when the game is auto playing, the text in the button is 'Stop Playing'. Otherwise, the text in the button is 'Auto Play'.

### 12u. Update the code so pressing ‘a' on keyboard will auto play the game.

### 12v. Update the 'Reset Score' button to use .addEventListener('click', ...)

### 12w. Update the code so pressing 'Backspace' will reset the score.

### 12x. When clicking 'Reset Score' or pressing 'Backspace', instead of resetting the score immediately, display a confirmation message below the button:

<img src="https://i.imgur.com/rumaFrP.png" height=40px>

- Clicking 'Yes' will reset the score, and hide the message.
- Clicking 'No' will not reset the score, and hide the message.

---

## My Solution

In this lesson, I explored advanced JavaScript concepts such as higher-order functions, arrow functions, and managing UI interactions with `setTimeout` and `setInterval`. I also extended my Rock Paper Scissors game by improving its interactivity and user experience.

**Watch my solution here:**

[Advanced JavaScript Functions & DOM Manipulations | Lesson 12](https://youtu.be/eCzqvtGxhU0)

---

## Key Takeaways

- Gained a deeper understanding of higher-order functions and arrow functions.
- Explored the use of `setTimeout` and `setInterval` for asynchronous JavaScript operations.
- Improved my DOM manipulation skills by integrating JavaScript event handling.
- Enhanced the functionality of my Rock Paper Scissors game by adding new features like keyboard controls and dynamic button states.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-12)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
