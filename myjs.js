/*-------------ROCK PAPER SCISSORS GAME-----------------
- Create a computerPlay function to generate computer's random choice['rock', 'paper','scissors']
- Create a playRound function with parameters playerSelection & computerSelection
  - It should return a string that declares winner
  - playerSelection should be case insensitive
- Write a game() function
  -  call the playRound();
  -  iterate through to play 5 rounds
  -  record scores
  -  Declare the winner or loser after the 5th round
*/
//-- Computer makes a choice
function computerPlay(){
  const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

//Player also makes a choice and then play a round
let playerWins = 'Player WON!';
let computerWins = 'Oops,you lost that!';
let drawGame = 'That was a TIE!\nLet us go again.'
//function gets user's entry, plays a Round & Returns winner

let button = document.querySelectorAll("input");
//PLAYER
let player = "";
button.forEach((button) => {
  button.addEventListener("click", () =>{
   player = button.value;
  })
})
//GAME
button.forEach((button) => {
  button.addEventListener("click", () =>{
   game();
   let win = document.querySelector("#winner");
    win.textContent = winner;
  })
})
let referee = document.getElementById("referee")

//Declaration of some global variables
let playerScore = 0;
let draws = 0;
let computerScore = 0;
let sumScore = playerScore+computerScore+draws;

let winner = "";

function playRound(playerSelection, computerSelection){

//COMPUTER
   let computer = computerPlay()
   let optionPlay = document.getElementById("optionPlay")
   let optionComp = document.getElementById("optionComp")
    optionComp.textContent = computer
    optionPlay.textContent = player
  
    if (player == 'rock' && computer == 'scissors'){
      let playScore = document.getElementById("playScore")
      playerScore++;
      playScore.textContent = playerScore;
      return referee.textContent = playerWins;
    }else if (player == 'paper' && computer == 'rock'){
      let playScore = document.getElementById("playScore")
      playerScore++;
      playScore.textContent = playerScore;
      return referee.textContent = playerWins;
    }else if (player == 'scissors' && computer == 'paper'){
      let playScore = document.getElementById("playScore")
      playerScore++;
      playScore.textContent = playerScore;
      return referee.textContent = playerWins;
    }else if (player == 'rock' && computer == 'paper'){
      computerScore ++;
      let compScore = document.getElementById("compScore")
      compScore.textContent = computerScore
      return referee.textContent = computerWins;
    }else if (player == 'paper' && computer == 'scissors'){
      computerScore ++;
      let compScore = document.getElementById("compScore")
      compScore.textContent = computerScore
      return referee.textContent = computerWins;
    }else if (player == 'scissors' && computer == 'rock'){
      computerScore ++;
      let compScore = document.getElementById("compScore")
      compScore.textContent = computerScore
      return referee.textContent = computerWins;
    }else if (player === computer){
      draws ++;
      let drawScore = document.getElementById("drawScore")
        drawScore.textContent = draws
      return referee.textContent = drawGame;
    }
}

//function keeps results
function scoreBoard(){
  if(referee === playerWins){
    playerScore++;
    }else if(referee === computerWins){
    computerScore ++;
    }else if(referee === drawGame){
    draws ++;
    }
}
//Playing a 5-Round Game
 function game(){
  for (let i = 0; i < 5; i++){
    playRound(); // Calls playRound for (i) times
    scoreBoard(); //Records scores
     
        
      
      
    //Conditions for declaration of the winner
   if(playerScore > computerScore){
     winner = "That's Genius! You won "+ playerScore +", and drew "+ draws + " out of " + sumScore + " Rounds";
   }else if(playerScore < computerScore){
     winner = "Sorry, You lost! You only won " + playerScore + ", and drew "+draws+  " out of " + sumScore + " Rounds";
   }else if(playerScore === draws || computerScore === draws) {
     winner = "It's a TIE this time. Let's play again";
     }
  }   
 }

//  function startAgain() {
//    if((playerScore + computerScore + draws )% 5 === 1){
//      game();
//    }
//  }