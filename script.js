function getComputerChoice(min, max) {
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    
}

function getHumanChoice(choice){
   
    console.log(choice);
    return choice;

}

const random = getComputerChoice(1, 3);
let computerChoice;

if (random === 1) {
    computerChoice = "Rock";
} else if (random === 2) {
    computerChoice = "Paper"
} else {
    computerChoice = "Scissor"

}

console.log("Computer Choice is ",computerChoice);



let humanChoice = getHumanChoice(prompt("Escolha pedra papel ou tesoura"));

let playerScore = 0;
let computerScore = 0;


function playRound(_human, _computer) {
if (_human === "Rock" && _computer === "Paper") {
    console.log("Computer Won");
    computerScore = computerScore + 1;
} else if (_human === "Rock" && _computer === "Scissor") {
    console.log("Player Won");
    playerScore = playerScore + 1;
} else if (_human === "Paper" && _computer === "Rock"){
    console.log("Player Won");
    playerScore = playerScore + 1;
} else if (_human === "Paper" && _computer === "Scissor") {
    console.log("Computer Won") 
    computerScore = computerScore + 1;
} else if (_human === "Scissor" && _computer === "Paper") {
    console.log("Player Won");
    playerScore = playerScore + 1;
} else if (_human === "Scissor" && _computer === "Rock") {
    console.log("Computer Won"); 
    computerScore = computerScore + 1;
} else if (_human = "Paper" && _computer === "Paper") {
    console.log("Draw");
} else if (_human = "Rock" && _computer === "Rock") {
    console.log("Draw");
} else if (_human = "Scissor" && _computer === "Scissor") {
    console.log("Draw");
    
} else {
    console.log("Invalid Entry");

}




console.log("Computer Score is:", computerScore);
console.log("Player Score is:", playerScore);

}

playRound(humanChoice, computerChoice);






//function getRandomIntInclusive(min, max) {
    //const minCeiled = Math.ceil(min);
    //const maxFloored = Math.floor(max);
    //return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  //}

