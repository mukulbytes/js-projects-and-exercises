# Rock Paper Scissors Project

## Watch Me Build This Project

- [Version 1](https://youtu.be/KcOmUlgSXww?feature=shared)
- [Version 2](https://youtu.be/YuTLIcnvhTg?feature=shared) (Added A Score Feature)
- [Version 3](https://youtu.be/MbOcWWNZkHQ?feature=shared) (DOM Manipulation and CSS)

## Project Overview

This Rock Paper Scissors project allows users to play a classic game of Rock, Paper, Scissors against a computer. The project uses JavaScript to calculate outcomes, update the score dynamically, and store the results using `localStorage` to keep track of the score between sessions.

## Project Functionality

- **Select Move**: Users can select rock, paper, or scissors by clicking the corresponding buttons.
- **Random Computer Move**: The computer randomly selects rock, paper, or scissors.
- **Outcome Display**: The game displays whether the player won, lost, or tied after each round.
- **Score Tracking**: The user's score (wins, losses, ties) is stored and displayed on the page.
- **Reset Score**: A reset button allows users to clear the score and start over.

## What I Learned

- How to use JavaScript to randomly generate outcomes based on player input.
- Managing and displaying the game state using HTML and JavaScript DOM manipulation.
- Persisting data between sessions using `localStorage`.
- Creating a simple user interface with buttons and images to enhance user interaction.

## Methods Used

- **JavaScript DOM Manipulation**: Used `document.querySelector` and `innerHTML` to update elements based on game outcomes.
- **Math.random()**: Used to randomly generate the computer’s move.
- **LocalStorage**: Stored game results in the browser to persist scores across sessions.
- **CSS Styling**: Styled the game elements with buttons, images, and a responsive layout for an improved user experience.

## Code Overview

- The `calculateOutcome(playerMove)` function determines the winner by comparing the player's move to the randomly generated computer move.
- The `updateScore()` function tracks and updates the score (wins, losses, ties) based on the result.
- The `displayResult()` function updates the DOM to show the player's and computer's move along with the outcome.
- The `resetScore()` function clears the score and resets it in both the UI and localStorage.

## Connect with Me

- **Twitter**: [@mukulbytes](https://x.com/mukulbytes)
- **LinkedIn**: [Mukul Dogra](https://linkedin.com/in/mukul-dogra)

---

This is part of my journey to master JavaScript. Follow along for more updates as I tackle more advanced concepts and build projects!
