//Crate a function that randomly chooses between Rock, Paper, and Scissors.
function computerPlay(){
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * 10) % 3;
    return myArray[x];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  for (let i = 0; i < 5; i++) {
    // your code here!
 }
 console.log();
 prompt();
