function getComputerChoice() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}

const rounds = 5;
let currentRound = 0;
let computerScore = 0;
let userScore = 0;

const container = document.querySelector('.container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// container for result text
const resultContainer = document.createElement('div');
resultContainer.classList.add('resultContainer');
document.body.appendChild(resultContainer);
const result = document.createElement('p');
result.style.textAlign = 'center';

// score variables
const userScoreElement = document.querySelector('#userScore');
const computerScoreElement = document.querySelector('#computerScore');

// computing score on rock button press
rock.addEventListener('click', () => {
    const userChoice = 'rock';
    playRound(userChoice);
});

paper.addEventListener('click', () => {
    const userChoice = 'paper';
    playRound(userChoice);

});

scissors.addEventListener('click', () => {
    const userChoice = 'scissors';
    playRound(userChoice);
});


function round(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        currentRound++;
        return result.textContent = "It's a draw";
    }
    else if ((computerChoice === "rock" && userChoice === "scissors")    ||
                (computerChoice === "paper" && userChoice === "rock")    ||
                (computerChoice === "scissors" && userChoice === "paper")) {
        computerScore++;
        currentRound++;
        return result.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if ((computerChoice === "rock" && userChoice === "paper")     ||
                (computerChoice === "paper" && userChoice === "scissors") ||
                (computerChoice === "scissors" && userChoice === "rock")) {
        userScore++;
        currentRound++;
        return result.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    }
    else {
        return result.textContent = "Check your imput";
    }
}

function playRound(userChoice) {
    // limit rounds to 5
    if (currentRound === rounds) {
        result.textContent = "This is the final score";
        return
    }

    // handling button press
    let computerChoice = getComputerChoice().toLowerCase();
    round(computerChoice, userChoice);
    resultContainer.appendChild(result);

    for (let i = 0; i <= currentRound; i++) {
        let computerScoreChecker = 0;
        let userScoreChecker = 0;

        if (computerScoreChecker != computerScore) {
            computerScoreElement.innerHTML = computerScore;
        }

        if (userScoreChecker != userScore) {
            userScoreElement.innerHTML = userScore;
        }
    }

};

