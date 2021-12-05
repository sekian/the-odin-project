let playerScore = 0;
let computerScore = 0;
const message = "Choose Rock, Paper or Scissors!";
const buttons = document.querySelectorAll('button')

function computerPlay() {
    choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function enableButtons() {
    buttons.forEach(elem => {
        elem.disabled = false
    })
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection)
        return 'Draw!';
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper")
                return "Player Lose! Paper beats Rock";
            else if (computerSelection == "scissors")
                return "Player Win! Rock beats Scissors";
            break;
        case "paper":
            if (computerSelection == "scissors")
                return "Player Lose! Scissors beats Paper";
            else if (computerSelection == "rock")
                return "Player Win! Paper beats Rock";
            break;
        case "scissors":
            if (computerSelection == "rock")
                return "Player Lose! Rock beats Scissors";
            else if (computerSelection == "paper")
                return "Player Win! Scissors beats Paper";
            break;
    }
    return "Player did not select Rock, Paper or Scissors";
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const divResult = document.querySelector(".result");

buttons.forEach(button => {
    button.addEventListener('click', function(){
        result = playRound(button.textContent, computerPlay());
        updateStats(result);
    })
})

function updateStats(result) {
    if (result.includes("Win")) ++playerScore;
    else if (result.includes("Lose")) ++computerScore;

    result = (result + "<br><br>Player score: " + playerScore +
             "<br>Computer score: " + computerScore)
    divResult.innerHTML = result;
    console.log(`Player won ${playerScore} time(s)`);
    console.log(`Computer won ${computerScore} time(s)`);

    if (computerScore >= 5) {
        result += '<br><br>The computer won the game!';
        divResult.innerHTML = result;
        disableButtons();
        addResetButton();
    }
    if (playerScore >= 5) {
        result += '<br><br>The player won the game!';
        divResult.innerHTML = result;
        disableButtons();
        addResetButton();
    }
}

function addResetButton() {
    const btn = document.createElement("button");
    btn.id = "resetButton";
    btn.textContent = "Play again!";
    btn.addEventListener('click', reset);
    divResult.appendChild(document.createElement("br"));
    divResult.appendChild(document.createElement("br"));
    divResult.appendChild(btn);
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    divResult.textContent = "";
    enableButtons();
    updateStats(message)
}

function game() {
    // for (let i = 0; i < 5; ++i) {
    //     const playerSelection = window.prompt(message, "");;
    //     const computerSelection = computerPlay();
    //     result = playRound(playerSelection, computerSelection);
    //     if (result.includes("Win")) ++playerScore;
    //     else if (result.includes("Lose")) ++computerScore;
    //     console.log(result);
    // }
}
