 /* guess the number */
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const previousGuesses = document.getElementById('previousGuesses');

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    guesses.push(userGuess);
    previousGuesses.textContent = `Previous guesses: ${guesses.join(', ')}`;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber}!`;
        message.style.color = 'green';
        resetGame();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }

    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    setTimeout(() => {
        document.getElementById('message').textContent = '';
        document.getElementById('previousGuesses').textContent = '';
    }, 5000);
}
