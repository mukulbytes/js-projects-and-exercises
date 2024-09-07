# Cart Quantity Project Version 5

## Project Overview
This version of the Cart Quantity Project improves upon previous iterations by incorporating dynamic display updates directly in the HTML using JavaScript. The cart quantity is displayed on the page, offering a more interactive and user-friendly experience.

## Project Functionality
- **Show Quantity**: Displays the current quantity in the cart directly on the web page.
- **Add to Cart**: Increases the cart quantity by 1, with a maximum limit of 10 items.
- **Add Two**: Increases the cart quantity by 2, with a maximum limit of 10 items.
- **Add Three**: Increases the cart quantity by 3, with a maximum limit of 10 items.
- **Add Four**: Increases the cart quantity by 4, with a maximum limit of 10 items.
- **Add Five**: Increases the cart quantity by 5, with a maximum limit of 10 items.
- **Remove One**: Decreases the cart quantity by 1, with a minimum limit of 0 items.
- **Remove Two**: Decreases the cart quantity by 2, with a minimum limit of 0 items.
- **Remove Three**: Decreases the cart quantity by 3, with a minimum limit of 0 items.
- **Reset Cart**: Resets the cart quantity to 0 and updates the displayed value.

## What I Learned
- Displaying dynamic values on the page using `innerHTML`.
- Managing DOM elements with JavaScript to show real-time updates.
- Further reinforced concepts of conditionals and user feedback.

## Methods Used
- JavaScript DOM manipulation with `document.querySelector` and `innerHTML`.
- Conditional logic to handle limits for cart quantity.
- Alert messages for feedback on invalid operations (e.g., cart full, not enough items).

## Code Overview
- The `showqty()` function now updates the cart quantity on the page using `innerHTML` instead of logging it to the console.
- The `addToCartRevised(qty)` function dynamically updates the cart based on the quantity passed as an argument, with a check to ensure the cart doesn't exceed the limit of 10.
- Similarly, `removeFormCartRevised(qty)` handles the subtraction of items from the cart with checks to prevent negative quantities.
- `resetcart()` resets the cart to zero and updates the displayed value.

## Watch Me Build This Project
[Watch the video](https://youtu.be/58CwdXPAeQ0?feature=shared&t=890) (Cart Quantity Project Timestamp: 14:50)

## Connect with Me
- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
