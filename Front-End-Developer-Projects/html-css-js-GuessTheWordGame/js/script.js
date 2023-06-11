//PROJECT TASK/S FOR GUESS THE WORD GAME PART 1
/*Create following global variables to select the following elements.
a unordered list where the player’s guessed letters will appear.
a button with the text “Guess!” in it.
a text input where the player will guess a letter.
a empty paragraph where the word in progress will appear.
a paragraph where the remaining guesses will display.
a span inside the paragraph where the remaining guesses will display.
a empty paragraph where messages will appear when the player guesses a letter.
a hidden button that will appear prompting the player to play again.
finally - global variable called word and give it the value of "magnolia". Magnolia is your starting word to test*/

const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
//Declare a Global Variable for the Number of Guesses
/*PART 4 Create a global variable called remainingGuesses and set it to a value of 8. The value 8 is the maximum number of guesses the player can make. You can decrease or increase this value to make the game harder or easier for the player! Hint: The value of the remainingGuesses variable will change over time.*/
let guessedLetters = [];
let remainingGuesses = 8;

//Add an Async Function
/*Near the top of your file, under the word, guessedLetters, and remainingGuesses global variables, add an async function called getWord() to fetch data from a file at this address: “https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt”.You also retrieved data from a file in the school field trip exercise in a previous lesson. The difference here is that you’re fetching data from a text file instead of a JSON file. In the second await statement, use .text() instead of .json().*/

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
/*You know how to grab a random element from an array, now you’ll grab a random word. To select a random word, you’ll need first to transform the data you fetched into an array. Each word is separated by a newline (line break), so this is the delimiter you’ll use to create the array: const wordArray = words.split("\n");. Log out your wordArray to see the data.*/
const words = await response.text();
    const wordArray = words.split("\n");
/*To grab a random word from the file, create a variable to pull a random index from the wordArray.You wrote similar code when you pulled a random image in a previous challenge.*/
    const randomIndex = Math.floor(Math.random() * wordArray.length);
/*Still in the function, pull out a random word from the array and remove any extra whitespace around the word using the trim() method. Reassign the value of the existing word global variable to this new random word. This means you should also now declare the global word variable with let instead of const.*/
word = wordArray[randomIndex].trim();
placeholder(word);
};
/*Take placeholder(word) from your code’s global space and place it at the bottom of getWord(). In the location the call to placeholder(word) used to be, call getWord() instead.*/
/*Log out the result of the second await statement to see what data you retrieved! Don’t forget you’ll need to call getWord() in order to view the result in the console.*/
// Fire off the game
getWord();
// Display our symbols as placeholders for the chosen word's letters
//Write a Function to Add Placeholders for Each Letter
/*Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step).  Copy and paste the ● symbol into your code!*/
const placeholder = function (word) {
const placeholderLetters = [];
for (const letter of word) {
    // console.log(letter);
    placeholderLetters.push("●");
    }
/*Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” You’ll need to use an array and then join it back to a string using the .join("") method.*/
wordInProgress.innerText = placeholderLetters.join("");
};
//Add an Event Listener for the Button
/*Add event listener when player clicks Guess button. In the callback function, add a parameter for the event: e.*/
/*Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.*/
/*Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked.*/
guessLetterButton.addEventListener("click", function (e) {
e.preventDefault();
  // Empty message paragraph
message.innerText = "";
  // Let's grab what was entered in the input
const guess = letterInput.value;
  // Let's make sure that it is a single letter
const goodGuess = validateInput(guess);

if (goodGuess) {
    // We've got a letter! Let's guess!
    makeGuess(guess);
}
letterInput.value = "";
});
/*PROJECT TASK/S FOR GUESS THE WORD GAME PART 2*/
//Create a Function to Check Player’s Input
/*Create and name a function that accepts input value as a parameter. This function’s purpose is to validate the player’s input.*/
/*Inside the function, create variable for the accepted letter sequence: const acceptedLetter = /[a-zA-Z]/. Now your code uses a regular expression to ensure the player inputs a letter!*/
/*Still inside the function, use conditional block check for different scenarios. First, check if the input is empty. Then, check if the player has entered more than one letter. Finally, check if they’ve entered a character that doesn’t match the regular expression pattern.You’ll need the .match() method here. Each condition should have a message directing the player on what to input.*/
/*If all the other conditions aren’t met, the input is letter, which is what you’re looking for! Return the input.*/
//Validate Input in the Button Event Handler
/*Inside event handler function for the Guess button, empty the text of the message element.*/
const validateInput = function (input) {
const acceptedLetter = /[a-zA-Z]/;
if (input.length === 0) {
    // Is the input empty?
    message.innerText = "Please enter a letter.";
} else if (input.length > 1) {
    // Did you type more than one letter?
    message.innerText = "Please enter a single letter.";
} else if (!input.match(acceptedLetter)) {
    // Did you type a number, a special character or some other non letter thing?
    message.innerText = "Please enter a letter from A to Z.";
} else {
    // We finally got a single letter, 
    return input;
}
};

const makeGuess = function (guess) {
guess = guess.toUpperCase();
if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, silly. Try again.";
} else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    updateGuessesRemaining(guess);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
}
};

const showGuessedLetters = function () {
  // Clear the list first
guessedLettersElement.innerHTML = "";
for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
}
};

const updateWordInProgress = function (guessedLetters) {
const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
const revealWord = [];
for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
revealWord.push(letter.toUpperCase());
    } else {
    revealWord.push("●");
    }
}
  // console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};
//Create a Function to Count Guesses Remaining PART 4
/*Create and name a new function that will accept the guess input as a parameter. In the code, place this function before the function that checks if the player won.*/
/*In the function, grab the word and make it uppercase. Because the player’s guess is uppercase, making the word they’re guessing uppercase will compare letters with the same casing.*/
/*Find out if the word contains the guessedLetter. If it doesn’t include the letter from guess, let the player know that the word doesn’t contain the letter and subtract 1 from their remainingGuesses. If it does contain a letter, let the player know the letter is in the word.*/
const updateGuessesRemaining = function (guess) {
const upperWord = word.toUpperCase();
if (!upperWord.includes(guess)) {
    // womp womp - bad guess, lose a chance
    message.innerText = `Sorry, the word has no ${guess}.`;
    remainingGuesses -= 1;
} else {
    message.innerText = `Good guess! The word has the letter ${guess}.`;
}
/*Still in the function and below the conditional statement, determine if the remainingGuesses is a value of 0. If they have no guesses remaining, update the message to say the game is over and what the word is. If they have 1 guess, update the span inside the paragraph where the remaining guesses will display to tell the player they have one guess remaining. If they have more than one guess, update the same span element to tell them the number of guesses remaining.*/

if (remainingGuesses === 0) {
    message.innerHTML = `Game over. The word was <span class="highlight">${word}</span>.`;
    startOver();
} else if (remainingGuesses === 1) {
    remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
} else {
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
}
};
//Create a Function to Check If the Player Won
/*Create and name a function to check if the player successfully guessed the word and won the game. Begin by verifying if their word in progress matches the word they should guess.*/
/*If the player has won, add the “win” class to the empty paragraph where messages appear when they guess the letter. Also, update the paragraph’s contents to: <p class="highlight">You guessed correct the word! Congrats!</p>.*/
/*At the bottom of the function that updates the word in progress, call this function to check if the player has won.*/
/*Play the game to make sure the guessed letters are displaying on the screen. When all the corrected letters are guessed, you should see the congratulatory message.
In the command line, add and commit your changes. Push the changes up to GitHub*/
const checkIfWin = function () {
if (word.toUpperCase() === wordInProgress.innerText) {
    message.classList.add("win");
    message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;

    startOver();
}
};
//Create a Function to Hide and Show Elements STEP 5
/*At the bottom of the script.js file, create a function called startOver to hide:
a) the Guess button.
b) the paragraph where the remaining guesses will display.
c)the unordered list where the guessed letters appear.*/
const startOver = function () {
guessLetterButton.classList.add("hide");
remainingGuessesElement.classList.add("hide");
guessedLettersElement.classList.add("hide");
playAgainButton.classList.remove("hide");
};

// Use the startOver function to show the button to play again.
//Add a Click Event to the Play Again Button
/*Add a click event listener for the Play Again button. Remove the class of “win” applied to the message element. Empty the message text and the unordered list where the guessed letters appear.*/
// reset all original values - grab new word
//Call the startOver function when the game is over whether the player wins or loses.
//Set your guessedLetter global variable back to an empty array.   
/*Set the remaining guess back to 8 or whichever number of guesses you decided on*/
/*Populate the text of the span inside the paragraph where the remaining guesses display with the new amount of guesses.*/
playAgainButton.addEventListener("click", function () {
  // reset all original values - grab new word
message.classList.remove("win");
guessedLetters = [];
remainingGuesses = 8;
remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
guessedLettersElement.innerHTML = "";
message.innerText = "";
  // Grab a new word
getWord();

  // show the right UI elements
guessLetterButton.classList.remove("hide");
playAgainButton.classList.add("hide");
remainingGuessesElement.classList.remove("hide");
guessedLettersElement.classList.remove("hide");
});







//Create a Function to Capture Input
/*Below the function that checks input, create a new function called makeGuess that accepts a letter as the parameter.*/

/*JavaScript is case sensitive, so it sees uppercase and lowercase letters as different characters. The easiest way to handle case-sensitivity is to convert all letters to one casing. We recommend converting your letter parameter to uppercase. Once the letter transforms to uppercase, check to see if your guessedLetters array already contains that letter.*/

/*If the player already guessed the same letter, update the message to inform the player they’ve already guessed that letter and try again. If they haven’t guessed that letter before, add the letter to the guessedLetters array.*/

//Log out the guessedLetters array to the console.

/*Return to the event handler for the Guess button. Make sure that the variable mapped to the result of the function validates that the player’s input is returning a letter (as opposed to “undefined”). If it’s returning a letter, pass it as an argument to your makeGuess function.*/

/*Try a few letter guesses in the browser window. Ensure you’re seeing the guessedLetters array contents updating as you input new letters and click the button.
Add and commit your changes with the command line. Push the changes up to GitHub*/

//Create a Function to Show the Guessed Letters, PART 3

/*Create and name a function to update the page with the letters the player guesses*/
/*Empty the innerHTML of the unordered list where the player’s guessed letters will display.*/
/*Create a new list item for each letter inside your guessedLetters array (i.e., the global variable) and add it to the unordered list.*/
/*Call the function inside the else statement of the makeGuess function so the letter displays when it hasn’t been guessed before.*/
/*Test it out! You should see each unique guessed letter show up on the screen when you hit the Guess button.*/


//Create a Function to Update the Word in Progress

/*Create and name a function to update the word in progress that accepts the guessedLetters array as a parameter. This function will replace the circle symbols with the correct letters guessed.*/

/*Create a variable called wordUpper to change the word variable to uppercase. On the following line, create a variable to split the word string into an array so that the letter can appear in the guessedLetters array: const wordArray = wordUpper.split("");. Then, log out wordArray to see what this does!*/

/*Check if the wordArray contains any letters from the guessedLetters array. If it does contain any of the letters, update the circle symbol with the correct letter. Hint: You’ll want to create a new array with the updated characters and then use join() to update the empty paragraph where the word in progress will appear.*/

/*Call your new shiny new function at the bottom of the else statement inside the makeGuess function and pass it guessedLetters as an argument.*/












   










