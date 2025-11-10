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
