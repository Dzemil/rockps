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

}