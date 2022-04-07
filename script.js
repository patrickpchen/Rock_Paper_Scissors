game();

//A function that plays one round of the game.
function oneRound(){
    //Create a function that takes the user's choice.
    let playerSelection;
    let computerSelection;
    let whoWins;
    let a = prompt('Choose between Rock, Paper, and Scissors.');

    //Turn that choice into lowercase.
    a = a.toLowerCase();

    //Make sure the user chose between the three options.
    //If they did, make it official and let the game start.
    //If the user chose something that is not rock, paper, or scissors, do the following:
    if(a !== 'rock' && a !== 'paper' && a !== 'scissors'){
        alert('You need to choose between rock, paper, and scissors.');
        whoWins = 'No one wins. You chose something that is not rock, paper, or scissors.';
    } else {
    //Finalize the user's choice and display it.
        playerSelection = a;
        console.log(`You chose ${playerSelection}.`);
    //Get the computer's choice.
        computerSelection = computerPlay();
    //Let the computer and the user play! Tell the user what the computer chose.
        console.log(`The computer chose ${computerSelection}.`);
    //Store the result message. 
        whoWins = playRound(playerSelection, computerSelection);
    }
    //Announce the result message.
    console.log(whoWins);
    //Return the result message.
    return whoWins;
}

//Crate a function that randomly chooses between Rock, Paper, and Scissors.
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

  //const playerSelection = "rock";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));

//Create a function for five rounds of the game.
function game(){
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        //Get the result message from the oneRound function.
        let win = oneRound();
        //If the result message contains the letter 'w', that means the user won.
        if (win[4] === 'w'){
            playerWins = playerWins + 1;
        //If the result message contains the letter 'l', that means the computer won.
        } else if (win[4] === 'l'){
            computerWins = computerWins + 1;
        }
        //Tell the user the current scores.
        console.log(`You: ${playerWins}; Computer: ${computerWins}`);
    }
    //Announce the final winner.
    if(playerWins > computerWins){
        console.log('You win!');
    } else if(computerWins > playerWins){
        console.log('You lose...');
    } else {
        console.log('It\'s a draw.');
    }
}