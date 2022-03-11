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
  function playRound(playerSelection, computerSelection){
    let player = prompt('Enter your weapon and let us play:').toLowerCase();
    let computer = computerPlay();
      if (player == 'rock' && computer == 'scissors'){
        return playerWins;
      }else if (player == 'paper' && computer == 'rock'){
        return playerWins;
      }else if (player == 'scissors' && computer == 'paper'){
        return playerWins;
      }else if (player == 'rock' && computer == 'paper'){
        return computerWins;
      }else if (player == 'paper' && computer == 'scissors'){
        return computerWins;
      }else if (player == 'scissors' && computer == 'rock'){
        return computerWins;
      }else if (player === computer){
        return drawGame;
      }else{
        return prompt('Check you selection again, please...');
      }  
  }
  //Declaration of some global variables
  let playerScore = 0;
  let computerScore = 0;
  let draws = 0;
  let winner = "";
  //function keeps results
  function scoreBoard(){
    if(playerWins){
      playerScore++;
      }else if(computerWins){
      computerScore ++;
      }else if(drawGame){
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
      winner = "That's Genius! You won "+ playerScore +", and drew "+draws+ " out of 5 Rounds";
    }else if(playerScore < computerScore){
      winner = "Sorry, You lost! You only won " + playerScore + ", and drew "+draws+  " out of 5 Rounds";
    }else{
      winner = "It's a TIE this time. Let's play again";
      }
    }
    return winner; //Returning the winner
  }
  console.log(game());