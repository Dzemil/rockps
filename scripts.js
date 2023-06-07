function getComputerChoice()
{
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];

    let randomChoice = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomChoice];
}



for(let i = 0; i < 5; i++)
{
    const computerChoice = getComputerChoice().toLowerCase();
    const userChoice = prompt().toLowerCase();

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
            return `You win! ${userChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "paper" && userChoice === "rock")
        {
            return `You lose! ${computerChoice} beats ${userChoice}`;
        }
        else if (computerChoice === "paper" && userChoice === "scissors")
        {
            return `You win! ${userChoice} beats ${computerChoice}`;
        }
        else if (computerChoice === "scissors" && userChoice === "rock")
        {
            return `You win! ${userChoice} beats ${computerChoice}`;
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
    console.log(round(computerChoice,userChoice));
}