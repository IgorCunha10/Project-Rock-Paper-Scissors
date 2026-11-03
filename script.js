let humanScore = 0;
let computerScore = 0;
 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector('#computerScore');
const roundWinner = document.querySelector("#roundWinner");
const restartBtn = document.querySelector("#restart");

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
        computerScore++;

    } else if (computerChoice === humanChoice) {
        winner = "DRAW.";

    } else {
        winner = "YOU WON.";
        humanScore++;
    }

    if(humanScore == 5) {
        winner = "CONGRATULATIONS! YOU WON THE GAME.";
        
        rock.disabled = true;
        scissor.disabled = true;
        paper.disabled = true;

    } else if(computerScore == 5) {
        winner = "DEFEAT! COMPUTER HAS WON THE GAME."

        rock.disabled = true;
        scissor.disabled = true;
        paper.disabled = true;

    }
    
    playerScore.textContent = `Player: ${humanScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
    roundWinner.textContent = `${winner}`;
    
}

function restartGame() {
    location.reload();
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

restartBtn.addEventListener("click", restartGame)