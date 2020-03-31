function rpsGame(yourChoice) {

	console.log(yourChoice); // User choice by click

	var humanChoice, botChoice;

	humanChoice = yourChoice.id;
	//console.log("User Choice is", humanChoice);

	botChoice = numberToChoice(randtoRpsInt());
	//console.log("Computer Choice is", botChoice);

	result = decideWinner(humanChoice, botChoice);

	message = finalMessage(result);
	console.log(message);

	rpsFrontEnd(yourChoice.id, botChoice, message);




}



// === generate a random number ===
function randtoRpsInt() {
	return Math.floor(Math.random()*3);
}


// ===function to choose Rock Paper Scissor
function numberToChoice(number) {
	return ['rock', 'paper', 'scissor'][number];
}



// === decide who is the winner

function decideWinner(yourChoice, computerChoice) {

	var rpsDatabase = {
		"rock": {"scissor" :1, "rock": 0.5, "paper":0},
		"paper":{"rock": 1, "paper": 0.5, "scissor":0},
		"scissor":{"paper":1, "scissor":0.5, "rock":0}
	}

	var yourScore = rpsDatabase[yourChoice][computerChoice];
	var ComputerScore = rpsDatabase[computerChoice][yourChoice];

	return [yourScore, ComputerScore];
}

// Final Message 

function finalMessage([yourScore, ComputerScore]) {
	if (yourScore === 0) {
		return{"message":"you lost", "coloer":"red"};
	}
	else if (yourScore === 0.5) {
		return {"message":"you tied", "color":"yellow"};
	}
	else {
		return {"message": "You won", "Color":"green"};
	}
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
	var imagesDatabase = {
		"rock":document.getElementById("rock").src,
		"paper":document.getElementById("paper").src,
		"scissor":document.getElementById("scissor").src,
	}

	// remove all images from the browser view

	document.getElementById("rock").remove();
	document.getElementById("paper").remove();
	document.getElementById("scissor").remove();

	//creating divs to show the result
	var humanDiv = document.createElement("div");
	var botDiv = document.createElement("div");
	var messageDiv = document.createElement("div");


	humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice]+"'height=400 width= 400 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
	messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + ";font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>'";
	botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice]+"'height=400 width= 400 style='box-shadow: 0px 10px 50px rgba(243, 38, 233, 1);'>"


	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

