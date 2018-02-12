const rock = "r";

const paper = "p";

const scissors = "s";

let userInput = userInput.toLowerCase();

const getUserChoice() => (userInput) {

	if (userInput === 'p' || userInput === 'r' || userInput === 's') {

		return userInput;
		} else {

			console.log("Fucking error Bruh")
			}


 function getComputerChoice() {

	var comChoice = Math.floor(Math.random() * 3);

	switch (comChoice) {
		case 0:
		return 'r';
		case 1: 
		return 'p';
		case 2:
		return 's';
	}
}

function determineWinner() {

	if (comChoice === userInput) {

		console.log("game was a tie boi");
	}

	if (userInput === 'r') {

		console.log("Youuouou Lost.")
	}


}

