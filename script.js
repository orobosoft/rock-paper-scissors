// Randomly return either Rock, Paper or Scissors
function computerPlay() {
    let choice;
    random = Math.floor(Math.random() * 3) + 1
    random === 1 ? choice = "Rock" :
        random === 2 ? choice = "Paper" :
            choice = "Scissors";
    return choice;
}

// Take two option and return a string that declares the winner
function playRound(playerSelection, computerSelection) {
    
}