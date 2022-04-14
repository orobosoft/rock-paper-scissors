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
		result = "Lose";
        winner = "Paper";
        loser = "Rock";
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
		result = "Won";
		winner = "Rock";
		loser = "Scissors";
	} else {
		result = "Draw";
		winner = "No-one";
		loser = "No-one";
	}
	return `You ${result}! ${winner} beats ${loser}`;
}

// Play a 5 round game
function game() {
	// Record score
	let playerScore = 0;
    let computerScore = 0;

    // Iterate the game
    for (let i = 0; i < 5; i++) {
        result = playRound(getInput(), computerPlay());
		if (result.includes("Won")) {
			playerScore++;
		}
		if (result.includes("Lose")) {
			computerScore++;
		}

		console.log(result);
		console.log(playerScore, computerScore);
	}

    //Report a winner or loser
	if (playerScore > computerScore) {
		console.log("Won");
	} else if (playerScore === computerScore) {
		console.log("Draw");
	} else {
		console.log("Lost");
	}
	console.log(playerScore, computerScore);
}
