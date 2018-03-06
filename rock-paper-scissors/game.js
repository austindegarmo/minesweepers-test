const rock = "r";

const paper = "p";

const scissors = "s";

let userInput = userInput.toLowerCase();


var getUserChoice() => (userChoiceBoi) {


	if (userChoiceBoi === 'p' || userChoiceBoi === 'r' || userChoiceBoi === 's') {

		return userChoiceBoi;
		} else {

			console.log("Fucking error Bruh")
			}
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
getUserChoice();
getComputerChoice();
determineWinner();

console.log(getComputerChoice);
console.log(getUserChoice);

