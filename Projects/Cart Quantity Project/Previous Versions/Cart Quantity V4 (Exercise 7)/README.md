# Cart Quantity Project Version 4

## Project Overview
In Version 4 of the Cart Quantity Project, the logic for adding and removing items has been optimized. This version introduces a more flexible way to add and remove quantities using a single function for each operation. The cart continues to have a maximum limit of 10 items and a minimum of 0 items.

## Project Functionality
- **Show Quantity**: Displays the current quantity in the cart.
- **Add to Cart**: Allows adding items to the cart in quantities of 1, 2, 3, 4, or 5, with a maximum limit of 10 items.
- **Remove from Cart**: Allows removing items from the cart in quantities of 1, 2, or 3, with a minimum limit of 0 items.
- **Reset Cart**: Resets the cart quantity to 0.

## What I Learned
- Refactored the code to create more reusable functions, making the logic for adding and removing quantities more flexible.
- Improved code maintainability by reducing redundant code for adding and removing items.

## Methods Used
- Refactoring to reduce repetitive code.
- Conditional logic to handle cart limits and prevent invalid operations.
- Console logs to track and display cart quantity.

## Code Overview
- A single function, `addToCartRevised`, is used to add items to the cart in variable quantities, ensuring that the cart quantity does not exceed 10.
- The `removeFormCartRevised` function is similarly used for removing items from the cart while preventing the quantity from dropping below 0.
- The `showqty` function is responsible for logging the current cart quantity to the console.

## Watch Me Build This Project
[Watch the video](https://youtu.be/4JNndT0DnMU?feature=shared&t=917) (Cart Quantity Project Timestamp: 15:17)

## Connect with Me
- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
