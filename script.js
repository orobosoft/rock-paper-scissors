// Randomly return either Rock, Paper or Scissors
function computerPlay() {
	let choice;
	random = Math.floor(Math.random() * 3) + 1;
	random === 1
		? (choice = "Rock")
		: random === 2
		? (choice = "Paper")
		: (choice = "Scissors");
	return choice;
}

// Take two option and return a string that declares the winner
function playRound(playerSelection, computerSelection) {
	// Make parameters case-insensitive
	let ps, cs;
	ps = playerSelection.toLowerCase();
	cs = computerSelection.toLowerCase();

	// Game logic for single round play
	if (ps === cs) {
		result = "tie";
	} else if (ps === "rock") {
		if (cs === "paper") {
			result = "computer";
		} else {
			result = "player";
		}
	} else if (ps === "paper") {
		if (cs === "rock") {
			result = "player";
		} else {
			result = "computer";
		}
	} else if (ps === "scissors") {
		if (cs === "rock") {
			result = "computer";
		} else {
			result = "player";
		}
	}
	return result;
}
