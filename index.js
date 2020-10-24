/* Target DOM elements ...lets begin */

const choices = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset');

const playerContainer = document.getElementById('player-score');
const playerChoice = playerContainer.querySelector('.display-choice');
const playerScore = playerContainer.querySelector('.display-score');

const computerContainer = document.getElementById('computer-score');
const computerChoice = computerContainer.querySelector('.display-choice');
const computerScore = computerContainer.querySelector('.display-score');

const currentWin = document.getElementById('current-win');
const showCurrentRound = document.getElementById('current-round');
const winnerDisplay = document.getElementById('winner-display');

/*========================================================*/


/* Global variables for the entire code*/

const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const ROCK = 'ROCK';

const moves = [ROCK, PAPER, SCISSORS];

let playerWins = 0;
let computerWins = 0;
let currentRound = 1;

/*========================================================*/


/* Functions for the .js code */

function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    let randomChoice = moves[random];

    return randomChoice;
}

function playRound(pSelection, cSelection) {
    showCurrentRound.textContent = currentRound;

    /*lets check for victory */
    if (
        pSelection === ROCK && cSelection === SCISSORS ||
        pSelection === SCISSORS && cSelection === PAPER ||
        pSelection === PAPER && cSelection === ROCK
    ) {
        playerWins++;
        playerScore.textContent = playerWins;
        currentWin.textContent = 'Great zangi win!';
    }
    else if (pSelection === cSelection) {
        currentWin.textContent = "Nice its a draw!";
    }
    else {
        computerWins++;
        computerScore.textContent = computerWins;
        currentWin.textContent = 'Opps Computer win!';
    }

    /*Change the UI text*/ 
    computerChoice.textContent =  cSelection;
    playerChoice.textContent = pSelection;

    currentRound++;
}

function resetStat() {
    playerWins = 0;
    computerWins = 0;
    currentRound = 1;

    computerScore.textContent = computerWins;
    playerScore.textContent = playerWins;
    showCurrentRound.textContent = currentRound;

    currentWin.textContent = '';
    computerChoice.textContent = '/';
    playerChoice.textContent = '/';
}

for (let choice of choices) {
    choice.addEventListener('click', () => {
        playRound(choice.value, computerPlay());
    });
}

resetBtn.addEventListener('click', resetStat);
/*thank you!*/