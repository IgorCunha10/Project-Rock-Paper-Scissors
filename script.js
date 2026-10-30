let humanScore = 0;
let computerScore = 0;
let result; 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("scissor");

function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3);
    let choice;
    
    if(computerChoice === 0) {
        choice = "ROCK";
    } else if(computerChoice === 1) {
        choice = "PAPER";
    } else if(computerChoice === 2) {
        choice = "SCISSOR";
    }

    return choice;

}

function getHumanChoice(humanChoice) {
    let choice = humanChoice;
    return choice;
}

function playRound(humanChoice, computerChoice) {

    let winner;

    if(humanChoice == "ROCK" && computerChoice == "PAPER" ||
       humanChoice == "PAPER" && computerChoice == "SCISSOR" ||
       humanChoice == "SCISSOR" && computerChoice == "ROCK"
    ) {

        winner = "COMPUTER WON.";
        computerScore += 1;

    } else if (computerChoice === humanChoice) {
        winner = "DRAW.";

    } else {
        winner = "YOU WON.";
        humanScore += 1;
    }
    
    return console.log(winner + "\nSCORE" + "\nCOMPUTER: " + computerScore + 
        "\nYOU: " + humanScore
    );

}

document.getElementById("rock").addEventListener("click", function() {
    playRound(getHumanChoice("ROCK"), getComputerChoice());
})

document.getElementById("paper").addEventListener("click", function() {
    playRound(getHumanChoice("PAPER"), getComputerChoice());
})

document.getElementById("scissor").addEventListener("click", function() {
    playRound(getHumanChoice("SCISSOR"), getComputerChoice());
})