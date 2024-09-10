# Cart Quantity Project

## Watch Me Build This Project

- [Version 1](https://youtu.be/HsipG7OSXw0?feature=shared)
- [Version 2](https://youtu.be/VNdtgAQeMbk?feature=shared&t=153) (Cart Quantity Project Timestamp: 2:33)
- [Version 3](https://youtu.be/haDz-g7PYFk?feature=shared&t=566) (Cart Quantity Project Timestamp: 9:26)
- [Version 4](https://youtu.be/ssCC8HEVFPI?feature=shared&t=917) (Cart Quantity Project Timestamp: 15:17)
- [Version 5](https://youtu.be/8X_0Tu8qpMY?feature=shared&t=871) (Cart Quantity Project Timestamp: 14:31)

## Project Overview

This version of the Cart Quantity Project introduces buttons for dynamically updating the cart quantity using JavaScript. The quantities are displayed on the page in real-time, allowing for a user-friendly experience with interactive buttons.

## Project Functionality

- **Show Quantity**: Displays the current cart quantity on the web page.
- **Add to Cart**: Adds 1 item to the cart, ensuring the cart doesn't exceed 10 items.
- **Add Two**: Adds 2 items to the cart, with a maximum limit of 10 items.
- **Add Three**: Adds 3 items to the cart, with a maximum limit of 10 items.
- **Add Four**: Adds 4 items to the cart, with a maximum limit of 10 items.
- **Add Five**: Adds 5 items to the cart, with a maximum limit of 10 items.
- **Remove One**: Removes 1 item from the cart, ensuring the cart doesn't go below 0.
- **Remove Two**: Removes 2 items from the cart, with a minimum limit of 0 items.
- **Remove Three**: Removes 3 items from the cart, with a minimum limit of 0 items.
- **Reset Cart**: Resets the cart quantity to 0 and displays the updated value.

## What I Learned

- How to dynamically update HTML elements using `innerHTML`.
- Using JavaScript to manage cart operations and ensure limits on quantity.
- Implementing user feedback with `alert` messages for invalid operations (e.g., cart is full, not enough items).

## Methods Used

- **JavaScript DOM Manipulation**: Used `document.querySelector` and `innerHTML` to interact with HTML elements.
- **Conditional Logic**: Implemented checks to prevent exceeding cart limits and ensure the cart doesn't go below zero.
- **Alert Feedback**: Provided real-time feedback using `alert` to guide the user on invalid cart operations.

## Code Overview

- The `showqty()` function updates the displayed cart quantity using `innerHTML` from the JavaScript variable `cart`.
- The `updateCartQuantity(qty)` function modifies the cart quantity based on the value passed, ensuring that the cart doesn't exceed 10 items or go below 0, with alerts for invalid actions.
- The `resetcart()` function resets the cart quantity to 0 and alerts the user that the cart has been reset.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
