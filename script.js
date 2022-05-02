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

// Show and remove the choice of both player and computer
function updateChoice(a, b) {
	player = document.querySelector(".playerchoice p");
	computer = document.querySelector(".computerchoice p");

	player.textContent = a.charAt().toUpperCase() + a.slice(1);
	computer.textContent = b;
}
function removeChoice() {
	player = document.querySelector(".playerchoice p");
	computer = document.querySelector(".computerchoice p");

	player.textContent = "You";
	computer.textContent = "Comp";
}

// Update and clear the score of the game
function updateScore(result) {
	result === "tie" ? draw++ : result === "player" ? playerScore++ : computerScore++;
	playerScoreUi.textContent = playerScore;
	drawUi.textContent = draw;
	computerScoreUi.textContent = computerScore;
}
function removeScore() {
	playerScore = 0;
	draw = 0;
	computerScore = 0;
	playerScoreUi.textContent = 0;
	drawUi.textContent = 0;
	computerScoreUi.textContent = 0;
}

// Add and remove text to show result of each round
function updateScoreInfo(result) {
	scoreInfo = document.querySelector(".score-info p");
	if (result === "tie") {
		text = "It's a tie";
	} else {
		winner = result.charAt().toUpperCase() + result.slice(1);
		text = scoreInfo.textContent = `${result} wins`;
	}
	scoreInfo.textContent = text;
}
function removeScoreInfo() {
	scoreInfo = document.querySelector(".score-info p");
	scoreInfo.textContent = "";
}

// Record the first to reach 5 points as the winner
function countScores() {
	if (playerScore === 5) {
		winner = "player";
	} else if (computerScore === 5) {
		winner = "computer";
	} else {
		winner = "";
	}
	return winner;
}

// Main game sequence
function playGame(e) {
	playerChoice = e.target.id;
	computerChoice = computerPlay();
	updateChoice(playerChoice, computerChoice);
	result = playRound(playerChoice, computerChoice);
	updateScore(result);
	updateScoreInfo(result);
	winner = countScores();
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
options.forEach((opt) => opt.addEventListener("click", playGame));
