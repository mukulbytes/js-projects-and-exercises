let compMove = '';

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};

updateScore();

function computerMove() {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum >= 0 && randNum < 1 / 2) {
        compMove = 'heads';
    }
    else {
        compMove = 'tails';
    }

}

function playGame(guess) {
    computerMove();
    if (guess === compMove) {
        document.querySelector('.result').innerHTML = `You Win`;
        score.wins += 1;
        updateScore();
    }
    else {
        document.querySelector('.result').innerHTML = `You Lose`;
        score.losses += 1;
        updateScore();
    }
}

function updateScore() {
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.score').innerHTML = `Wins: ${score.wins} || Losses: ${score.losses}`;
}
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    localStorage.removeItem('score');
    updateScore();

}