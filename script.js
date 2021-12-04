function computerPlay() {
    choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == computerSelection)
        return 'Draw!';
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper")
                return "You Lose! Paper beats Rock";
            else if (computerSelection == "scissors")
                return "You Win! Rock beats Scissors";
            break;
        case "paper":
            if (computerSelection == "scissors")
                return "You Lose! Scissors beats Paper";
            else if (computerSelection == "rock")
                return "You Win! Paper beats Rock";
            break;
        case "scissors":
            if (computerSelection == "rock")
                return "You Lose! Rock beats Scissors";
            else if (computerSelection == "paper")
                return "You Win! Scissors beats Paper";
            break;
    }
    return "Player did not select Rock, Paper or Scissors";
}

function game() {
    playerWins = 0;
    computerWins = 0;
    const message = "Choose Rock, Paper or Scissors!";
    for (let i = 0; i < 5; ++i) {
        const playerSelection = window.prompt(message, "");;
        const computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")) ++playerWins;
        else if (result.includes("Lose")) ++computerWins;
        console.log(result);
    }
    console.log(`Player won ${playerWins} time(s)`);
    console.log(`Computer won ${computerWins} time(s)`);
}
