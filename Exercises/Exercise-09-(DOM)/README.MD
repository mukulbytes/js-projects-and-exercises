# Document Object Model (DOM) - Lesson 9 Exercises

This repository showcases my solutions to **Lesson 9** of the JavaScript Basics. These exercises focus on manipulating the DOM, handling user input, and updating the page dynamically. I also worked on improving projects from previous lessons by integrating DOM manipulation techniques.

## Exercise Questions

### 9a. Create a `<button>9</button>`. Use `document.querySelector('button')` to get the button from the page, and then display it in the console.

### 9b. Continuing from 9a, create another button `<button>9b</button>` below. Using JavaScript, change the text in the second button to '9b done!' (hint: add a class and use `.querySelector`).

### 9c. Create 2 buttons 'heads' and 'tails', and a paragraph (`<p></p>`) underneath. When clicking the 'heads' button, display 'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.

<!-- ![9c](https://i.imgur.com/hZcBrby.png) -->
<img src="https://i.imgur.com/hZcBrby.png" width=200px>

### 9d. Create a text box (`<input>`) and a submit button. When clicking 'Submit', display `'Your name is: $(text)'` on the page (&dollar;{text}= the text inside the text box) (hint: use`.value`to get the text inside an input).

<!-- ![9d](https://i.imgur.com/dlOi3ti.png) -->
<img src="https://i.imgur.com/dlOi3ti.png" width=350px>

### 9e. Modify exercise 9d so that when you press 'Enter' in the `<input>`, it will also display the same message on the page (hint: use `onkeydown` and the event object).

### 9f. Continuing from 9e, create a function to reuse the code (if you already did this, skip this exercise).

---

## Challenge Exercises

### 9g. Create a file `9g.html` and copy the code from [09-dom-projects.html](https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/09-dom-projects.html) into this file. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue do you see? Find a fix for this issue.

<!-- ![9g](https://i.imgur.com/psRc4Bx.png) -->
<img src="https://i.imgur.com/psRc4Bx.png" width=350px>

### 9h. Let's create the project below:

<!-- ![9h](https://i.imgur.com/AjFQW2m.png) -->
<img src="https://i.imgur.com/AjFQW2m.png" width=300px>

- Whenever we type in the text box, update the text on the page.
- To do this, we'll learn another event called `<input onkeyup="...">`. This runs code after we press a key and release it (key comes up).

### 9i. We'll improve the Cart Quantity project:

- Make a [copy of exercise 7k](<https://github.com/mukulbytes/js-projects-and-exercises/blob/master/Exercises/Exercise-7-(Functions)/7k%20-%207l%20(Cart%20Quantity%20Project).html>) (see the solution for 7k if needed).
- Create a paragraph (`<p></p>`) to display the quantity.
- Whenever we update the quantity, display it on the page instead of in the console. Also, display the quantity when the page first loads.

<!-- ![9i](https://i.imgur.com/pkWC45C.png) -->
<p align=center>
<img src="https://i.imgur.com/pkWC45C.png" width=600px>
</p>

### 9j. We'll improve the calculator project:

<!-- ![9i](https://i.imgur.com/AOHtLvk.png) -->
<img src="https://i.imgur.com/AOHtLvk.png" width=220px>

- Make a [copy of exercise 8h](https://github.com/SuperSimpleDev/javascript-course/blob/main/1-exercise-solutions/lesson-08/8h.html).
- Whenever we update the calculation, display it on the page instead of in the console.
- When the page first loads, if a calculation exists in localStorage, display it on the page.

---

## My Solution

In this exercise, I focused on manipulating the DOM to interact with user inputs and update the page dynamically. I also worked on enhancing projects from previous lessons by applying DOM manipulation techniques.

**Watch my solution here:**

[JavaScript DOM Manipulation: Solving Key Exercises and Challenges | Exercise 9](https://youtu.be/8X_0Tu8qpMY?feature=shared)

---

## Key Takeaways

- Practiced using DOM methods to interact with HTML elements.
- Learned to handle user inputs and update the page dynamically.
- Improved previous projects by integrating new DOM techniques.
- Gained experience in debugging and fixing issues related to DOM manipulation.

---

## Reference:

[JavaScript Basics Exercises](https://github.com/SuperSimpleDev/javascript-course/tree/main/1-exercise-solutions/lesson-09)

---

## Course I'm Following:

[JavaScript Tutorial Full Course](https://www.youtube.com/watch?v=EerdGm-ehJQ)

---

## Connect with Me:

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://www.linkedin.com/in/mukul-dogra-520345307/)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
