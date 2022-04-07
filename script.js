//Create a function that takes the user's choice.
let playerSelection;
let computerSelection;
let a = prompt('Choose between Rock, Paper, and Scissors.');

//Turn that choice into lowercase.
a = a.toLowerCase();

//Make sure the user chose between the three options.
//If they did, make it official and let the game start.
if(a !== 'rock' && a !== 'paper' && a !== 'scissors'){
    alert('You need to choose between rock, paper, and scissors.');
} else {
//Finalize the user's choice.
    playerSelection = a;
//Get the computer's choice.
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

//Crate a function that randomly chooses between Rock, Paper, and Scissors.
function computerPlay(){
    let myArray = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random() * 10) % 3;
    return myArray[x];
}

//Let the computer and the user play!
function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection){
        return 'It\'s a draw.';
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return 'You win! Paper beats rock.';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'You lose! Rock beats scissors.';
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'You lose! Paper beats rock.';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return 'You win! Scissors beat paper.';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return 'You win! Rock beats scissors.';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'You win! Paper beats rock.';
    } 
  }

  //const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));

  for (let i = 0; i < 5; i++) {
    // your code here!
 }
 console.log();
 
