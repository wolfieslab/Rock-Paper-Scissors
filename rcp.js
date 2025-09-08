let computerScore = 0;
let playerScore = 0;
let winner = "";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
const scoreInfo = document.querySelector("#score-info");
const scoreMessage = document.querySelector("#score-message");
const winnerMessage = document.querySelector("#winner-message");
const restart = document.querySelector("#restart");
const popup = document.querySelector("#popup");

restart.addEventListener("click", () => {
    restartGame();
});

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});


//computer chooses between rock, paper, scissors
function getComputerChoice() {
    function getRandomInteger() {
        return Math.floor(Math.random() * (4 - 1) + 1);
    }

    let randomNumber = getRandomInteger();
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
        default:
            return
    }
}

function isGameOver(){
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            winnerMessage.textContent = "You Win!"
            popup.setAttribute("style", "display: flex;");
        }
        else {
            winnerMessage.textContent = "You Lose!";
            popup.setAttribute("style", "display: flex;");
        }
    }
}

//compare both user's and computer's choice
function playRound(playerChoice, computerChoice) {

    if (
        playerChoice === "rock" && computerChoice === "scissor" ||
        playerChoice === "scissor" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock"
    ) {
        playerScore++;
        scoreInfo.textContent = "You Win!"
        scoreMessage.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}`;
    }
    else if (
        computerChoice === "rock" && playerChoice === "scissor" ||
        computerChoice === "scissor" && playerChoice === "paper" ||
        computerChoice === "paper" && playerChoice === "rock"
    ) {
        computerScore++;
        scoreInfo.textContent = "You Lose!"
        scoreMessage.textContent = `${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}`;
    }
    else {
        scoreInfo.textContent = "Tied!"
    }

    computerScorePara.textContent = computerScore;
    playerScorePara.textContent = playerScore;
    isGameOver();
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = playerScore;
    computerScorePara.textContent = computerScore;
    scoreInfo.textContent = "Choose your weapon";
    scoreMessage.textContent = "First to earn 5 points wins the game.";
    popup.setAttribute("style", "display: none;")
            

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}


