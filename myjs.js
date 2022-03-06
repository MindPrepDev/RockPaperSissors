//create a function computerPlay that randomly return either of three strings;
function computerPlay(arr){
    const randomIndex = Math.floor(Math.random()*arr.length)
    const input = arr[randomIndex]
    return input;
}
const computerTurn = ['Rock', 'Paper', 'Scissors'];
let show = computerPlay(computerTurn);
console.log(show);
//function single round'Rock', 'Paper' and 'Scissors'
//check it up in the console

//create a function singleRound(playerSelection - case insensitive, computerSelection)
//function returns a string that declares the winner of the round like: "You Won! Rock beats Paper"
//else "You Lose! Paper beats Rock"