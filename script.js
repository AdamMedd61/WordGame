let secretWord = '';
let attempts = 0;
const maxAttempts = 6;
// Initialize board
const board = document.getElementById('board');
for (let i = 0; i < maxAttempts; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);
  }
  board.appendChild(row);
}


// Fetch random word from backend
fetch('backend/fetchWord.php')
  .then(res => res.json())
  .then(data => {
    secretWord = data.word;
    console.log("Secret word:", secretWord); // for testing
  });

document.getElementById('submitGuess').addEventListener('click', () => {
  const input = document.getElementById('guess');
  const guess = input.value.toLowerCase();

  if (guess.length !== 5) {
    alert('Enter a 5-letter word!');
    return;
  }

  if (attempts >= maxAttempts) return;

  const row = board.children[attempts];
  for (let i = 0; i < 5; i++) {
    const cell = row.children[i];
    cell.textContent = guess[i];

    if (guess[i] === secretWord[i]) {
      cell.classList.add('correct');
    } else if (secretWord.includes(guess[i])) {
      cell.classList.add('present');
    } else {
      cell.classList.add('absent');
    }
  }

  attempts++;
  input.value = '';

  if (guess === secretWord) {
    document.getElementById('message').textContent = 'You guessed it!';
  } else if (attempts === maxAttempts) {
    document.getElementById('message').textContent = `You lost! The word was ${secretWord.toUpperCase()}`;
  }
});
