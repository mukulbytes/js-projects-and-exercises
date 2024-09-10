# Coin Flip Game Project

## Watch Me Build This Project

- [Version 1](https://youtu.be/HsipG7OSXw0?feature=shared)
- [Version 2](https://youtu.be/VNdtgAQeMbk?feature=shared&t=153) (Coin Flip Game Project Timestamp: 2:33)
- [Version 3](https://youtu.be/haDz-g7PYFk?feature=shared&t=566) (Coin Flip Game Project Timestamp: 9:26)
- [Version 4](https://youtu.be/ssCC8HEVFPI?feature=shared&t=917) (Coin Flip Game Project Timestamp: 15:17)
- [Version 5](https://youtu.be/8X_0Tu8qpMY?feature=shared&t=871) (Coin Flip Game Project Timestamp: 14:31)

## Project Overview

This Coin Flip Game allows users to guess the outcome of a coin flip, either "heads" or "tails." The game tracks the number of wins and losses, displaying the results in real-time. The score is saved using `localStorage` to keep track of wins and losses even after refreshing the page.

## Project Functionality

- **Guess Outcome**: Users can choose "Heads" or "Tails" to guess the result of a coin flip.
- **Game Result**: The game displays whether the user's guess was correct or incorrect.
- **Score Tracking**: The number of wins and losses is tracked and displayed on the page.
- **Reset Score**: Users can reset the score to zero with the provided button.

## What I Learned

- How to implement a simple game using JavaScript and DOM manipulation.
- Generating random outcomes with JavaScript's `Math.random()`.
- Managing game state and persisting data using `localStorage`.
- Updating the UI dynamically based on game results and user interactions.

## Methods Used

- **JavaScript DOM Manipulation**: Updated the displayed result and score using `document.querySelector` and `innerHTML`.
- **Random Number Generation**: Used `Math.random()` to simulate the coin flip.
- **LocalStorage**: Used `localStorage` to persist the score across page reloads.
- **Event Handling**: Attached event listeners to buttons to trigger game logic.

## Code Overview

- The `computerMove()` function randomly selects "heads" or "tails" to simulate the coin flip.
- The `playGame(guess)` function compares the user's guess to the computer's move and updates the result and score.
- The `updateScore()` function updates the score display and saves the current score to `localStorage`.
- The `resetScore()` function resets the score to zero and clears it from `localStorage`.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
