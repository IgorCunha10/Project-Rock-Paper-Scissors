function getComputerChoice(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 3);

}

//Função que vai pegar a escolha do usuário humano;
function getHumanChoice(choice) {
choice = prompt("Escolha (Pedra, Papel ou Tesoura): ");

return choice;
}

//Função que vai pegar a escolha do usuário e independente da entrada do usuário, ele vai Transformar a primeira letra em maiúscula e as outras letras em minúsculas;
function capitalizeFirstLetter(string) {
    if (string.lenght === 0) {
        return "Entrada Inválida";
      
    }

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


//Variáveis que vão calcular o placar do usuário e o do computador;
let humanScore = 0;
let computerScore = 0;


//Função que vai pegar as escolhas do ser humano e a do computador e vai rodar o jogo;
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("Empate!");
    } else if (humanChoice === "Pedra" && computerChoice === "Papel" || 
        humanChoice === "Papel" && computerChoice === "Tesoura" ||
         humanChoice === "Tesoura" && computerChoice === "Pedra") {
            console.log("O computador venceu!")
            computerScore = computerScore + 1;
         } else {
            console.log("Você venceu!")
            humanScore = humanScore + 1;
         }

         return console.log("Você : ", humanScore, "Computador: ", computerScore);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice (1,3);


let humanChoice = capitalizeFirstLetter(humanSelection);
let computerChoice;

if (computerSelection == 1) {
    computerChoice = "Pedra";
} else if (computerSelection == 2) {
    computerChoice = "Papel";
} else {
    computerChoice = "Tesoura";
}

console.log(humanChoice);
console.log(computerChoice);

console.log(playRound(humanChoice, computerChoice));


function playGame(human, computer){

}
