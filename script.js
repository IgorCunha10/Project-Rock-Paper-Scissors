function getComputerChoice(min, max) {
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    
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

console.log(computerChoice);

function getHumanChoice(){
    
}



function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

