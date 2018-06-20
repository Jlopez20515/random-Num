
} else if ( parseInt(guess) > randomNumber ) {
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if ( parseInt(guessLess) > randomNumber ) {
    correctGuess = true;
  }
}

/* test if player is correct and output response */
if (correctGuess) {
  document.write('<p> you guessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
}
