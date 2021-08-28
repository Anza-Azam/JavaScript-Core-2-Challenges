let randomNumber = Math.floor(Math.random() * 100 + 1);
let maxTries = 3;
let tries = 0;
console.log(randomNumber)
function guessNumber() { // Collect input from the user
    let guess = document.querySelector('.inputs-Values').value
    tries += 1
    console.log(maxTries)
    if (maxTries === tries) {

        let outPut = document.querySelector('.final-output')
        outPut.value = 'You Lose, the number was ' + randomNumber;

    }
    // If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100" else if (guess <= 0 || guess > 100) {
        let outPut = document.querySelector('.final-output')
        outPut.value = 'Please enter a number between 1 and 100'

    }


    // If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print) else if (guess > randomNumber) {
        let outPut = document.querySelector('.final-output')
        outPut.value = 'Number is too high';
    }
    // If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print) else if (guess < randomNumber) {
        let outPut = document.querySelector('.final-output')
        outPut.value = 'Number is too low';
    }


    // If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!" else {
        console.log(guess)
        let outPut = document.querySelector('.final-output')
        outPut.value = 'Guess is correct. You win!' + 'It took you ' + tries + ' tries to win'

    }

}


// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
    // Your code here
    // Reset randomNumber
    randomNumber = Math.floor(Math.random() * 100 + 1)
    console.log(randomNumber)
    // Reset users input field
    let guess = document.getElementById('num')
    tries = 0;
    maxTries = 3;
    guess.value = '';
    let outPut = document.querySelector('.final-output')
    outPut.value = ' '

    console.log(guess)

    // Reset tries, and triesTaken by the user
}

// keyboard exception
function keyBoardEvents(e) {
    if (e.keyCode === 13) {
        guessNumber();
    }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);

document.addEventListener("keypress", keyBoardEvents);
