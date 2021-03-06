const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
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
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;

    }
    board[randomRowIndex][randowColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }

  return board;
};
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,2],[0,4],[1,5],[1,6],[1,7]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = [bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if(bombBoard[neighborRowIndex]['B'] == false) {
        numberOfBombs++;
      }else if ('B' == bombBoard);
    }
  });
    return numberOfBombs;
    const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
      if(playerBoard == ' ') {
        console.log(' This tile has already been flipped!');
        return

      }

    }
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));

};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

console.log("Look at console for logged fun.")
