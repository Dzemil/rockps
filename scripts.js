function getComputerChoice()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}

let computerScore = 0;
let userScore = 0;

const container = document.querySelector('.container');
const rock = document.querySelector('#rock');

// container for result text
const resultContainer = document.createElement('div');
resultContainer.classList.add('resultContainer');
container.appendChild(resultContainer);
const result = document.createElement('p');



rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice().toLowerCase();
    const userChoice = 'rock';

    round(computerChoice, userChoice);
    resultContainer.appendChild(result);
});



function round(computerChoice, userChoice)
{
    if (computerChoice === userChoice)
    {
        return result.textContent = "It's a draw";
    }
    else if ((computerChoice === "rock" && userChoice === "scissors") ||
                (computerChoice === "paper" && userChoice === "rock")    ||
                (computerChoice === "scissors" && userChoice === "paper"))
    {
        return result.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if ((computerChoice === "rock" && userChoice === "paper")     ||
                (computerChoice === "paper" && userChoice === "scissors") ||
                (computerChoice === "scissors" && userChoice === "rock"))
    {
        return result.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    }
    else
    {
        return result.textContent = "Check your imput";
    }
}

