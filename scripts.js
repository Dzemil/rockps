function getComputerChoice()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}

function getUserChoice()
{
    return prompt();
}

const computerChoice = getComputerChoice().toLowerCase();
const userChoice = getUserChoice().toLowerCase();

function round(computerChoice, userChoice)
{
    if (computerChoice === userChoice)
    {
        return "It's a draw";
    }
    else if (computerChoice === "rock" && userChoice === "scissors")
    {
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if (computerChoice === "rock" && userChoice === "paper")
    {
        return use`You win! ${userChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "paper" && userChoice === "rock")
    {
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else if (computerChoice === "paper" && userChoice === "scissors")
    {
        return use`You win! ${userChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "scissors" && userChoice === "rock")
    {
        return use`You win! ${userChoice} beats ${computerChoice}`;
    }
    else if (computerChoice === "scissors" && userChoice === "paper")
    {
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    else
    {
        return "Check your imput";
    }
}
console.log(computerScore, userScore);

/*
function game()
{
    for (let i = 0; i < 5; i++)
    {
        round();
    }
}
*/