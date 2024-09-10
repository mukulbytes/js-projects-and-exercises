# Arrays and Loops - Lesson 11 Exercises

This repository contains my solutions to **Lesson 11** of the JavaScript Basics. These exercises focus on working with arrays and loops, including array manipulation, creating functions, and solving challenges such as FizzBuzz and the Todo List project with `localStorage` integration.

## Exercise Questions

### 11a. Create an array of numbers: `const nums = [10, 20, 30]`. Modify the last value in this array and change it to `99`.

### 11b. Create a function `getLastValue(array)` that takes an array and returns the last value in the array. Hint: array indexes start at 0 so the last index is the number of values in the array minus 1 (lastIndex = array.length - 1).

- Example: `getLastValue([1, 20, 22, 24, 5])` => `5`
- Example: `getLastValue(['hi', 'hello', 'good'])` => `'good'`

### 11c. Create a function `arraySwap(array)` that takes an array and returns an array where the first and last values are swapped (or switched).

- Example: `arraySwap([1, 20, 22, 24, 5])` => `[5, 20, 22, 24, 1]`
- Example: `arraySwap(['hi', 'hello', 'good'])` => `['good', 'hello', 'hi']`

### 11d. Create a `for` loop that counts up from 0 to 10 by 2.

- Output: `0, 2, 4, 6, 8, 10`

### 11e. Create a `for` loop that counts down from 5 to 0.

- Output: `5, 4, 3, 2, 1, 0`

### 11f. Do exercises 11d and 11e using `while` loops.

### 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.

- Example: `[1, 2, 3]` => `[2, 3, 4]`

### 11h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.

- Example: `addOne([1, 2, 3])` => `[2, 3, 4]`
- Example: `addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]`

### 11i. Create a function `addNum(array, num)` that increases each number in an array by `num`.

- Example: `addNum([1, 2, 3], 2)` => `[3, 4, 5]`
- Example: `addNum([1, 2, 3), 3) => [4, 5, 6]`
- Example: `addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]`

### 11j. Create a function `addArrays(array1, array2)` that adds each number in two arrays together.

- Example: `addArrays([1, 1, 2], [1, 1, 3])` => `[2, 2, 5]`
- Example: `addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]`

### 11k. Create a function `countPositive(nums)` that returns how many numbers in an array are greater than 0.

- Example: `countPositive([1, -3, 5])` => `2`
- Example: `countPositive([-2, 3, -5, 7, 10])` => `3`

---

## Challenge Exercises

### 11l. Create a function min Max(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).

- Example: `minMax([1, -3, 5])` => `{ min: -3, max: 5 }`
- Example: `minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }`

### 11m. Update exercise 11l to handle edge cases like empty arrays or arrays with only one value.

- Example: `minMax([])` => `{ min: null, max: null }`
- Example: `minMax([3]) => { min: 3, max: 3 }`

### 11n. Create a function countWords (words) that takes an array of strings and returns an object with how many times each string appeared.

- Example: `countWords(['apple', 'grape', 'apple'])` => `{ apple: 2, grape: 1 }`

### (Hint: you can access a property using a variable: object[variable]; This uses the value inside the variable as the property name).

### 11o. Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is, console.log() the index of 'search' in in the array. If not, console.log ‘-1'.

- Example: `['hello', 'world', 'search']` => `console.log(2)`
- Example: `['not', 'found'] => console.log(-1)`

### 11p. Modify 110 so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break;

- Example: `['hello', 'world', 'search', 'good', 'search'] => console.log(2)`

### 11q. Create a function findIndex(array, word) that searches an array for a string (in the 'word' parameter) and returns the index of the first appearance of the string. If it doesn't exist in the array, return -1.

- Example: `findIndex(['green', 'red', 'blue', 'red'], 'red') => 1 `
- Example: `findIndex(['green', 'red', 'blue', 'red'], 'yellow') => -1`

### 11r. Create a function removeEgg (foods) that takes an array of strings and returns an array where the string 'egg' is removed. (Hint: loop through the array and check if each string is 'egg'. If it is 'egg', use ‘continue;' to skip it. If it's not 'egg', add it to the result).

- Example: `removeEgg (['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']`

### 11s. Update exercise 11r to only remove the first 2 eggs from the array.

- Example: `removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']`

### 11t. Arrays have a method called .reverse(), which reverses the order of the values in the array. Using .reverse(), update exercise 11s to only remove the last 2 eggs from the array.

- Example: `removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['egg', 'apple', 'ham']`

### 11u. In exercise 11t, one problem with .reverse() is that it doesn't create a copy of the array it is reversing. It modifies the original array. Update the code so the function does not modify the original array. (Hint: use the .slice() method to create a copy of an array's values).

- Example: `const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];`
- Example: `console.log(removeEgg (foods)) => ['egg', 'apple', 'ham']`
- Example: `console.log(foods) => ['egg', 'apple', 'egg', 'egg', 'ham']`

## Challenge Exercises

### 11v. We'll do the famous FizzBuzz problem. Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it's divisible by 5, display 'Buzz' instead. If it's divisible by 3 and 5, display 'FizzBuzz' instead. (Reminder: divisible by 3 means num % 3 === 0).

- Output: `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, ... 13, 14, FizzBuzz, 16, 17, ...`

### 11w. Create a copy of exercise 11q, where we created findIndex(). Below it, create a function unique(array) that takes an array of strings and returns an array where each string only appears once (there are no duplicates). Try to use the findIndex() function in your solution.

- Example: `unique(['green', 'red', 'blue', 'red']) => ['green', 'red', 'blue']`
- Example: `unique(['red', 'green', 'green', 'red']) => ['red', 'green']`

### 11x. Create 3 files 11x.html, 11x.css, and 11x.js, and [copy the code for the Todo List project](https://github.com/mukulbytes/js-projects-and-exercises/tree/master/Projects/03-Todo-List-Project/TodoList%20v3/src) into these files.

- Update the `<link>` and `<script>` elements to load 11x.css and 11x.js
- Update the todo list to use localStorage (if we modify the todo list and refresh the page, the todo list should stay the same).
- Hint: remember that localStorage only supports strings. You canuse JSON.stringify() to convert an array to a string.

---

## My Solution

In this exercise, I focused on mastering array manipulation and loops. I created various functions that modify arrays, solved the FizzBuzz challenge, and implemented a Todo List project using `localStorage`.

**Watch my solution here:**

[JavaScript Arrays and Loops: Solving Key Exercises and Challenges | Exercise 11](https://youtu.be/i0Eyu5zRT7g)

---

## Key Takeaways

- Mastered working with arrays and loops in JavaScript.
- Developed functions that manipulate arrays and handle edge cases.
- Solved FizzBuzz Problem.
- Added `localStorage` to the TodoList Project for persistent data.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-11)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
