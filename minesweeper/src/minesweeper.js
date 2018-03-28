const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let i = 0; i < numberOfColumns; i++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let i = 0; i < numberOfRows; i++) {
    const row = [];
    for (let i = 0; i < numberOfColumns; i++) {
      row.push(null);
    }
    board.push(row);
  }


  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randowColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randowColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));

};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
