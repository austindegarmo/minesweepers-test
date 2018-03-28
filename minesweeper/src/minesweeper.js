const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows.length; i++) {
    const row = [];
    for (let i = 0; i < numberOfColumns.length; i++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberofColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows.length; i++) {
    const row = [];
    for (let i = 0; i < numberOfColumns.length; i++) {
      row.push(null);
    }
    board.push(row);
  }


  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randowColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board [randomRowIndex][randowColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
  return board;
}

const printBoard = board => {
  board.map(row => row.join(' | '));

}
// const printBoard = (board) => {
//   console.log('Current Board: ');
//   // console.log(board[0].join(' | '));
//   // console.log(board[1].join(' | '));
//   // console.log(board[2].join(' | '));
// };



// printBoard(board);
