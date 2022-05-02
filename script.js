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

// Go to the game section
function startGame() {
	document.querySelector(".intro").style.display = "none";
	document.querySelector(".gameplay").style.display = "block";
}

// Score variables
let playerScore = 0;
let draw = 0;
let computerScore = 0;

// UI selection variables
const playerScoreUi = document.querySelector("#player-score span");
const drawUi = document.querySelector("#draw-score span");
const computerScoreUi = document.querySelector("#computer-score span");
const options = document.querySelectorAll(".options button");
const start = document.querySelector("#playgame-btn");
const xBtn = document.querySelector(".x-btn");

// Event Listeners
start.addEventListener("click", startGame);