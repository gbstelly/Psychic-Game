
// Creates an array that lists out the alphabet.
var computerChoices = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins, losses, and guesses. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = "";
var computerGuess;
var guessArray;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");




// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess =  event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if (userGuess === computerGuess) {
      alert("You Win!")
      wins++;
      guessesLeft = 9;
      userGuess = "";
      computerGuess = "";
      guessArray= "";
      

    } else {
      
      guessesLeft--;
      if (guessesLeft == 0){
        losses++;
        alert("You Loose");
         guessesLeft = 9;
         userGuess = "";
         computerGuess = "";
         guessArray= "";
      }
    }

  

    // Hide the directions
    directionsText.textContent = "";

    // Check for Undifind value -- if not undefined concatenate userguesses

    if ( guessArray ) {
        
        guessArray = guessArray + " , " + userGuess
    }else {

        guessArray = userGuess
    }
    

    // Display the user and computer guesses, and wins/losses/guesses.
    userChoiceText.textContent = "You chose: " + guessArray;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessesLeft;
};

