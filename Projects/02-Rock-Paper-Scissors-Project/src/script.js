let compMove = '';
let result = '';

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

displayScore();

// Calculates Computer Move
function calculateComputerMove() {
    let randNum = Math.random();

    if (randNum >= 0 && randNum < 1 / 3) {
        compMove = 'rock';
    }
    if (randNum >= 1 / 3 && randNum < 2 / 3) {
        compMove = 'paper';
    } else {
        compMove = 'scissors';
    }
}

//Plays the Game
function calculateOutcome(playerMove) {

    calculateComputerMove();

    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'Tie';
        }
        else if (compMove === 'paper') {
            result = 'You lose';
        }
        else {
            result = 'You win';
        }
    }

    if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'You win';
        }
        else if (compMove === 'paper') {
            result = 'Tie';
        }
        else {
            result = 'You lose';
        }
    }

    if (playerMove === 'scissors') {
        if (compMove === 'rock') {
            result = 'You lose';
        }
        else if (compMove === 'paper') {
            result = 'You win';
        }
        else {
            result = 'Tie';
        }
    }
    updateScore();
    displayResult(playerMove);
}

function displayResult(playerMove) {
    //     alert(`You Picked ${playerMove} || Computer Picked ${compMove} || ${result}
    // Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);

    const resultElement = document.querySelector('.js-result');
    const movesElement = document.querySelector('.js-moves-display');
    resultElement.innerHTML = `${result}`;
    movesElement.innerHTML = `You <img class="move-icon" src="Images/${playerMove}-emoji.png"> <img class="move-icon" src="Images/${compMove}-emoji.png"> Computer`;
    displayScore();
}

function displayScore() {
    const scoreElement = document.querySelector('.js-score');
    scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateScore() {
    if (result === 'You win') {
        score.wins += 1;
    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    displayScore();
    localStorage.removeItem('score');
}

let intervalIdAutoPlay;
let isAutoPlaying = false;
function autoPlay() {
    if (!isAutoPlaying) {
        isAutoPlaying = true;
        intervalIdAutoPlay = setInterval(() => {
            calculateComputerMove();
            calculateOutcome(compMove);
        }, 1000);
    }
    else {
        clearInterval(intervalIdAutoPlay);
        isAutoPlaying = false;
    }
}



