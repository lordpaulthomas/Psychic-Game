var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];



document.onkeyup = function (event)
{
var userGuess = event.key;
guessesMade.push(userGuess);
var randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];



var reset = function () {
    guessesLeft = 10;
    guessesMade = [];
}

if (userGuess === randomLetter){
    alert("You win!  The letter was " + randomLetter);
    wins++;
    guessesLeft = 10;
    reset();
} else{
    guessesLeft--;
}

if (guessesLeft === 0){
    alert("You lost!  The letter was " + randomLetter)
    losses++;
    guessesLeft = 10;
    reset();
}

var html = "<h1>The Psychic Game</h1>" +
"<p>Wins: "+ wins + "</p><p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Guesses Made : " + guessesMade + "</p>";

document.getElementById('gameInfo').innerHTML = html;

}
