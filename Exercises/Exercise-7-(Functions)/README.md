# Functions - Lesson 7 Exercises

This repository showcases my solutions to **Lesson 7** of the JavaScript Basics. These exercises focus on creating and using functions to perform various tasks, including conversions and updates. I also worked on applying these concepts to enhance existing projects.

## Exercise Questions

### Note: to do these exercises, create an HTML file (like 7a.html, 7b.html, ...)

### 7a. Create a function called `greet` that displays the message "Hello!" in the console. Call/run this function a few times using: `greet();`.

### 7b. Continuing from 7a, add a parameter called `name` to the `greet` function and display the message: "Hello ${name}!" Call the function a few times with different names: `greet('Simon');`.

### 7c. Try calling `greet()` without a name (it will display "Hello undefined!"). Modify the function so that if `name` is undefined, it will display "Hi there!" instead. (Hint: use an if-statement. Since undefined is a falsy value, you can use: `if (name) { ... }` to check if `name` is undefined).

### 7d. Create a function `convertToFahrenheit(celsius)` that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.

- Formula: Fahrenheit = (Celsius \* 9/5) + 32
- Example: `convertToFahrenheit(25)` => `77`

### 7e. Create a function `convertToCelsius(fahrenheit)` that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.

- Formula: Celsius = (Fahrenheit - 32) \* 5/9
- Example: `convertToCelsius(86)` => `30`

### 7f. Create a function `convertTemperature(degrees, unit)` that takes a number and a unit ('C' or 'F'), and converts it into the other unit.

- Example: `convertTemperature(25, 'C')` => `'77F'`
- Example: `convertTemperature(86, 'F')` => `'30C'`
- Note: return a string, and try to reuse the functions from 7d and 7e.

### 7g. Create a function `convertLength(length, from, to)` that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). Note: 1 mile = 1.6 km (approximately).

- Example: `convertLength(50, 'miles', 'km')` => `'80 km'`
- Example: `convertLength(32, 'km', 'miles')` => `'20 miles'`
- Example: `convertLength(50, 'km', 'km')` => `'50 km'`

### 7h. Update `convertLength` to support converting between km, miles, and also feet. Note: 1 mile = 5280 ft, 1 km = 3281 ft (approximately).

- Example: `convertLength(5, 'miles', 'km')` => `'8 km'`
- Example: `convertLength(5, 'miles', 'ft')` => `'26400 ft'`
- Example: `convertLength(5, 'km', 'ft')` => `'16405 ft'`

### 7i. Update `convertLength` so that if you give it an invalid unit, it will return "Invalid unit: $(unit)".

- Example: `convertLength(5, 'lbs', 'lbs')` => `'Invalid unit: lbs'`

---

## Challenge Exercises

### 7j. Create a copy of the Calculator project from exercise 5r (if you didn't do 5r, [copy the code for 5r from the solutions](https://github.com/SuperSimpleDev/javascript-course/blob/main/1-exercise-solutions/lesson-05/5r.html)).

- Notice there's a lot of duplicated code in the buttons.
- Create a function `updateCalculation` and reuse the code.

### 7k. Create a [copy of the Cart Quantity project](<https://github.com/mukulbytes/js-projects-and-exercises/blob/master/Exercises/Exercise-6-(Booleans%20and%20If-Statements)/6k%20-%206l%20(Cart%20Quantity).html>) from exercise 6l.

- Create a function `updateCartQuantity` and reuse the code.

### 7l. Modify `updateCartQuantity` from 7h so that if the quantity is invalid, `alert()` and then return; (this is called an early return). An early return makes our code cleaner because we can remove the `else-if`/`else` statements.

![7L](https://i.imgur.com/jBJlRpy.png)

---

## My Solution

In this exercise, I focused on creating and using functions to perform various tasks, including conversions and updates. I also applied these concepts to enhance existing projects, such as the Calculator and Cart Quantity projects.

**Watch my solution here:**

[JavaScript Functions: Solving Key Exercises and Challenges | Exercise 7](https://youtu.be/ssCC8HEVFPI?feature=shared)

---

## Key Takeaways

- Practiced creating and using functions to encapsulate code.
- Learned to handle default values and errors within functions.
- Applied functions to solve real-world problems like temperature and length conversions.
- Enhanced existing projects by adding new functionalities and improving code structure.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-07)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
