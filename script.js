//Initialize a counter that keeps track of how many
//rounds have been played.
//Show this counter on the page.

let round = 0;
const round_counter = document.querySelector('#round-counter');
round_counter.textContent = 'Round 0 of 5';

//Initialize the number of wins for the user and the computer.
//These variables will be used by five_games().

let playerWins = 0;
let computerWins = 0;

//Add an Event Listener that detects the user's choice
//and enters that choice as the input of five_games().

const ROCK = document.querySelector('#rock');
ROCK.addEventListener('click', () => five_games('rock'));

const PAPER = document.querySelector('#paper');
PAPER.addEventListener('click', () => five_games('paper'));

const SCISSORS = document.querySelector('#scissors');
SCISSORS.addEventListener('click', () => five_games('scissors'));

//If the user clicks on the RESET button, reset the game.

const RESET = document.querySelector('#reset');
RESET.addEventListener('click', () => reset_game());

//Create divs for the user's and the computer's choices.

const result = document.createElement('div');
const computer_choice = document.createElement('div');
const user_choice = document.createElement('div');

//Give those divs the class "report".

computer_choice.classList.add('report');
result.classList.add('report');
user_choice.classList.add('report');

const report = document.querySelector('.result-reporter#each-round');

report.appendChild(user_choice);
report.appendChild(computer_choice);
report.appendChild(result);

const scores = document.createElement('div');
const total = document.querySelector('#total');
scores.classList.add('report');
total.appendChild(scores);

//A function that plays one round of the game.

function oneRound(choice){
    let playerSelection;
    let computerSelection;
    let whoWins;

    playerSelection = choice;

    user_choice.textContent = `You chose ${playerSelection}.` + '\xa0';
    //Get the computer's choice.
    computerSelection = computerPlay();
    //Let the computer and the user play! Tell the user what the computer chose.
    computer_choice.textContent = `The computer chose ${computerSelection}.` + '\xa0';
    //Store the result message. 
    whoWins = playRound(playerSelection, computerSelection);
    //Announce the result message.
    result.textContent = whoWins;
    //Return the result message.
    return whoWins;
}

//Create a function that randomly chooses between Rock, Paper, and Scissors.

function computerPlay(){
    let myArray = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random() * 10) % 3;
    return myArray[x];
}

//Create a function that decides who wins.

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
        return 'You lose! Scissors beat paper.';
    } 
}

//Create a function for five rounds of the game.

function five_games(choice){

    round = round + 1;

    if (round <= 5){
        let win = oneRound(choice);
        //If the result message contains the letter 'w', that means the user won.
        if (win[4] === 'w'){
            playerWins = playerWins + 1;
        //If the result message contains the letter 'l', that means the computer won.
        } else if (win[4] === 'l'){
            computerWins = computerWins + 1;
        }
        //Tell the user the current scores.
        scores.textContent = `Current Scores: You: ${playerWins}; Computer: ${computerWins}`;
        round_counter.textContent = `Round ${round} of 5`;
    }

    if (round === 5){
        //If five rounds have been played, announce the final winner.
        if(playerWins > computerWins){
            scores.textContent = scores.textContent + '\xa0You win!! Press RESET to play again.';
        } else if(computerWins > playerWins){
            scores.textContent = scores.textContent + '\xa0You lose...Press RESET to play again.';
        } else {
            scores.textContent = scores.textContent + '\xa0It\'s a draw. Press RESET to play again.';
        }
    }

    return;
}

//This function resets the game.

function reset_game(){
    round = 0;
    playerWins = 0;
    computerWins = 0;
    result.textContent = '';
    user_choice.textContent = '';
    computer_choice.textContent = '';
    scores.textContent = '';
    round_counter.textContent = `Round 0 of 5`;
}