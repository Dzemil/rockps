function getComputerChoice()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}

let computerScore = 0;
let userScore = 0;

const computerChoice = getComputerChoice().toLowerCase();
let userChoice;
const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
    userChoice = 'rock';
});

function round(computerChoice, userChoice)
{
    if (computerChoice === userChoice)
    {
        return "It's a draw";
    }
    else if ((computerChoice === "rock" && userChoice === "scissors") ||
                (computerChoice === "paper" && userChoice === "rock")    ||
                (computerChoice === "scissors" && userChoice === "paper"))
    {
        computerScore++;
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if ((computerChoice === "rock" && userChoice === "paper")     ||
                (computerChoice === "paper" && userChoice === "scissors") ||
                (computerChoice === "scissors" && userChoice === "rock"))
    {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}`;
    }
    else
    {
        return "Check your imput";
    }
}

