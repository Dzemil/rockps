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
        else if ((computerChoice === "rock" && userChoice === "scissors") ||
                 (computerChoice === "paper" && userChoice === "rock")    ||
                 (computerChoice === "scissors" && userChoice === "paper"))
        {
            return `You lose! ${computerChoice} beats ${userChoice}`;
        }
        else if ((computerChoice === "rock" && userChoice === "paper")     ||
                 (computerChoice === "paper" && userChoice === "scissors") ||
                 (computerChoice === "scissors" && userChoice === "rock"))
        {
            return `You win! ${userChoice} beats ${computerChoice}`;
        }
        else
        {
            return "Check your imput";
        }
    }
    console.log(round(computerChoice,userChoice));
}