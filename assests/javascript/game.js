var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var playGame = confirm('Do you want to play The Psychic Game');

if (playGame) {
    document.onkeyup = function (event) {
        var userGuess = event.key;
        guessesMade.push(userGuess);
        var randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26))];



        var reset = function () {
            guessesLeft = 10;
            guessesMade = [];
        }

        if (userGuess === randomLetter) {
            alert("You win!  The letter was " + randomLetter);
            wins++;
            playGame = confirm('Play Again?');
            reset();
        } else {
            guessesLeft--;
        }

        if (guessesLeft === 0) {
            alert("You lost!  The letter was " + randomLetter)
            losses++;
            playGame = confirm('Play Again?')
            reset();
        }

        var html = "<h1>Guess the letter?</h1>" +
        "<p>Guesses Made:  " + guessesMade + "</p>" + "<p>Guesses Left:  " + guessesLeft + "</p>" + "<p>Wins:  " + wins + "</p>" + "<p>Losses:  " + losses + "</p>";
        document.getElementById('gameInfo').innerHTML = html;

    }
}

