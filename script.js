let humanScore = 0;
let computerScore = 0;
let result; 


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

function getHumanChoice() {
   let choice = prompt("Rock, paper or scissor?: ").toUpperCase();
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
    
    return console.log(winner);

}

function playGame() {

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

     if(humanScore > computerScore) {
            result = "YOU WON THE GAME.";
        } else if(computerScore > humanScore) {
            result = "COMPUTER WON THE GAME.";
        } else if(computerScore === humanScore) {
            result = "THE GAME ENDED TIED.";
        }

        return console.log("***SCORE*** " + "\n" +
                            "YOU: " + humanScore + "\n" +
                            "COMPUTER: " + computerScore + "\n" + 
                            result);
}

playGame();