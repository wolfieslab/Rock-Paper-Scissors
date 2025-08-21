let computerScore = 0;
let humanScore = 0;

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

//take user's choice between rock, paper, scissors
function getHumanChoice() {
    let choice = prompt
        (`What is your choice
    - Rock    - Paper   - Scissor`);
    return choice;
}


function playGame() {

    //compare both user's and computer's choice
    function playRound(humanChoice, computerChoice) {
        const userChoice = humanChoice.toLowerCase();
        console.log(userChoice);
        console.log(computerChoice);

        switch (userChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        console.log("Tied!");
                        break;
                    case "paper":
                        console.log("You lose! Paper beats Rock");
                        computerScore += 1;
                        break;
                    case "scissor":
                        console.log("You Win! Rock beats Scissor");
                        humanScore += 1;
                        break;
                    default:
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("You Win! Paper beats Rock");
                        humanScore += 1;
                        break;
                    case "paper":
                        console.log("Tied!");
                        break;
                    case "scissor":
                        console.log("You Lose! Scissor beats Paper");
                        computerScore += 1;
                        break;
                    default:
                        break;
                }
                break;
            case "scissor":
                switch (computerChoice) {
                    case "rock":
                        console.log("You lose! Rock beats Scissor");
                        computerScore += 1;
                        break;
                    case "paper":
                        console.log("You Win! Scissor beats Paper");
                        humanScore += 1;
                        break;
                    case "scissor":
                        console.log("Tied!");
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

    //repeats for 5 rounds
    for(round = 0; round < 5; round++)  {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    //Checks who wins the Game and prints the scores
    if(humanScore > computerScore) {
        console.log(`You Win!
            Computer Score : ${computerScore}
            Human Score : ${humanScore}`);
    }
    else if(humanScore === computerScore) {
        console.log(`Tied!
            Computer Score : ${computerScore}
            Human Score : ${humanScore}`);
    }
    else {
        console.log(`You Lose!
            Computer Score : ${computerScore}
            Human Score : ${humanScore}`);
    }
}

playGame();

