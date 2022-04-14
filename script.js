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

    // Make parameters case-insensitive
	let ps, cs;
	ps = playerSelection.toLowerCase();
	cs = computerSelection.toLowerCase();

	// Game logic for single round play
	if (ps === "rock" && cs === "paper") {
		result = "Won";
		(winner = "Rock"), (loser = "Paper");
	} else if (ps === "paper" && cs === "scissors") {
		result = "Lose";
		winner = "Scissors";
		loser = "Paper";
	} else if (ps === "scissors" && cs === "rock") {
		result = "Lose";
		winner = "Rock";
		loser = "Scissors";
	} else if (ps === "scissors" && cs === "paper") {
		result = "Won";
		winner = "Scissors";
		loser = "Paper";
	} else if (ps === "paper" && cs === "rock") {
		result = "Won";
		winner = "Paper";
		loser = "Rock";
	} else if (ps === "rock" && cs === "scissors") {
		result = "Lose";
		winner = "Rock";
		loser = "Scissors";
	} else {
		result = "Draw";
		winner = "No-one";
		loser = "No-one";
	}
	return `You ${result}! ${winner} beats ${loser}`;
}