//  Author: Ethan Mcilveen, 000858082
// Date: May	
// Javascript for coin flip game

let heads = 1; // variables
let tails = 0;
let playerScore = 0; // score variables
let compScore = 0;
let username = ""; // username and user inputed score
let playUntil = 0

	/**
    * event listener for heads/tails buttons click
    * @param args click
    **/
	 gameButtons.addEventListener('click', function(e){
		const random = Math.round(Math.random());
		const compPick = Math.round(Math.random());
		let compSelection;
			
			if (compPick == 1){
				compSelection = "heads"; // random number assigns computers choice
			}
			else {
				compSelection = "tails";	
			}
					
			const playerSelection = e.target.id;
			let playerPick
			if (playerSelection == 'heads'){ // player choice based on button pressed
				playerPick = 1;
			}
			else if (playerSelection == 'tails'){
				playerPick = 0;
			}
	
	
			displaySelection(playerSelection, compSelection) //call functions to start game 
			displayRandom(random)
	
			setTimeout(function(){
				trackScore(random, playerPick, compPick)
				document.querySelector('.image')
			})
	})

	// 	THESES SECTIONS HANDLE GAME FUNCTIONS// 

	/**
    * event listener for reset button
    * @param args none
    **/
reset.addEventListener('click', ()=>{
	resetGame()
	document.querySelector('#heads').style.visibility= "visible"
	document.querySelector('#tails').style.visibility= "visible"
})

    /**
    * displays the users selection and 
    * @param args user, computer
    **/
function displaySelection(user, computer){
	const playerSelection = document.querySelector('#playerSelection'); // set variables
	const compSelection= document.querySelector('#compSelection');
	
	if (user == 'heads'){
		playerSelection.style.color="red";		//displays user selection
	}	
	else{
		playerSelection.style.color="blue";
		
	}

	if (computer == 'heads'){
		compSelection.style.color="red"; 	//displays computer selection
		
	}	
	else{
		compSelection.style.color="blue";
		
	}

	playerSelection.innerHTML = user;
	compSelection.innerHTML = computer;
}

function resetGame(){
	playerScore = 0;	//resets all variables, game states and text displays (i.e. Player selected: none)
	compScore = 0;
	playerSelection.innerHTML ="";
	compSelection.innerHTML ="";
	winner.innerHTML = '';
	let resetPlayer = document.querySelector('#playerScore');
	let resetComp = document.querySelector('#compScore');
	resetPlayer.textContent = 0;
	resetComp.textContent = 0;
	validateForm();
}

  /**
    * displays the random correct answer's respective picture
    * @param args random
    **/
function displayRandom(random){
	const displayResult = document.querySelector('#image'); //set variables								
	// selects area where image will be
	
	if (random == 1){
		displayResult.style.backgroundImage="url('assets/images/heads.png')";
	}
	else{
		displayResult.style.backgroundImage="url('assets/images/tails.png')";
	}
	
}

	/**
    * Adds to and checks score for user and computer
    * @param args random, playerPick, compPick
    **/
function trackScore (random, playerPick, compPick){
	const playerDisplay = document.querySelector('#playerScore'); // set variables
	const compDisplay = document.querySelector('#compScore');
	const winner = document.querySelector('#winner');
	
	if(playerPick == random){ //checks selection and adds to userscore
		playerScore++;
	}
	
	if (compPick == random){ //checks selection and adds to compscore
		compScore++;
	}
	playerDisplay.textContent = playerScore; //updates score on webpage
	compDisplay.textContent = compScore;
	
	if((playerScore >= playUntil) && (compScore >= playUntil)){ // tie game state, hide buttons
		winner.style.color="black";
		winner.innerHTML = '<h2>Its a tie!</h2>';
		document.querySelector('#heads').style.visibility= "hidden"
		document.querySelector('#tails').style.visibility= "hidden"
		
	}
	else{
		if (playerScore == playUntil){ // user win game state, hide buttons
		winner.innerHTML = '<h2>You win!</h2>';
		winner.style.color="green";
		document.querySelector("#heads").style.visibility= "hidden"
		document.querySelector('#tails').style.visibility= "hidden"
		
		}
		else if (compScore == playUntil){  // computer win game state, hide buttons
		winner.innerHTML = '<h2>You Lose!</h2>';
		winner.style.color="red";
		document.querySelector('#heads').style.visibility= "hidden"
		document.querySelector('#tails').style.visibility= "hidden"
		
		}
		
	}


}

	/**
    * Event listener for username submit button
    * @param args none @returns none
    **/	
 formSubmit.addEventListener('click', ()=>{
	validateForm();
	resetGame();
	
})

// 	THESES SECTIONS HANDLE USERNAME VALIDATION// 

	/**
    * Username validate and assigning user defined score
    * @param args none
    **/			
function validateForm(){
	let username = document.forms["myForm"]["username"].value; // gets values from the form
	let score = document.forms["myForm"]["score"].value;
	playUntil = parseInt(score); // parses and gives playUntil the score value as a variable int

	if (username != ""){
		document.getElementById("container").style.visibility="visible"; // shows game and help message when username is valid
		document.getElementById("namesValid").innerHTML = "<h2>Welcome '"+ username +"', beat the computer in this thrilling game of coin flip. First to "+ score + " point(s) wins!</h2>";	
		document.querySelector('#heads').style.visibility= "visible"
		document.querySelector('#tails').style.visibility= "visible"
	}else{
		document.getElementById("namesValid").innerHTML = "<h2>Please enter a username above</h2>";
		document.getElementById("container").style.visibility="hidden"; // shows game and help message when username is valid
	}
}






	
	
	


