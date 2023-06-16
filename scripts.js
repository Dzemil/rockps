function getComputerChoice()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}

let computerScore = 0;
let userScore = 0;

const computerChoice = getComputerChoice().toLowerCase();
const rock = document.querySelector('#rock');

// display result
const resultContainer = document.createElement('div');
resultContainer.classList.add('resultContainer');

const result = document.createElement('p');
resultContainer.appendChild(result);


rock.addEventListener('click', () => {
    const userChoice = 'rock';
    round(computerChoice,userChoice);
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

