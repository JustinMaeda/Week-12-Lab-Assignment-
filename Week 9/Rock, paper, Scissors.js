function getComputerChoice() {
   const pick = ['rock', 'paper', 'scissors'];
   return pick[Math.floor(Math.random() * pick.length)];
}
let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
	 if (playerSelection === 'rock' && computerSelection === 'scissors') {
		 playerScore += 1;
         return "You win! Rock beats Scissors!";
     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
         playerScore += 1;
         return "You win! Scissors beats Paper!";
     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
         playerScore += 1;
         return "You win! Paper beats Rock!";
     } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
         computerScore += 1;
         return "You lose! Rock beats Scissors!";
     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
         computerScore += 1;
         return "You lose! Scissors beats Paper!";
     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
         computerScore += 1;
         return "You lose! Paper beats Rock!";
     } else {
         playerScore += 1;
         computerScore += 1;
         return "Tie!"
     }
}

function game () {
	for (let game = 0; game < 5; game++) {
	const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
	console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    }
	declareResults(playerScore, computerScore);
}
function declareResults (playerScore, computerScore)	{
	if (playerScore > computerScore){
		console.log("\nYou won the match!")
	} else if (playerScore < computerScore) {
		console.log("\nYou lost the match...!")
    } else {
		console.log("\nThe match was a tie!");
	}
}
	
game();

