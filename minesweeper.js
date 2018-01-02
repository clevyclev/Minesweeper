class Game{
  constructor (numberOfRows, numberOfColumns, numberOfBombs){
    this._Board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, collIndex){
    this._Board.flipTile(rowIndex, collIndex);
    if (this._Board._bombBoard[rowIndex][collIndex] === "B"){
      console.log("You've stepped on a bomb!  Game over, sucker!!! XD");
      this._Board.print();
    }
    else if(!this._Board.hasSafeTiles){
      console.log("Congratulations!  You've found all the safe tiles!  You win!");
    }
    else{
      console.log("Current Board:");
      this._Board.print();
    }
  }
}


class Board{
  constructor (numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard(){
    return this._playerBoard;
  }

  //Flipping tiles
  flipTile(rowIndex, collIndex){
    if(this._playerBoard[rowIndex][collIndex] !== ' '){
      console.log("This tile has already been flipped!");
      return;
    }
    else if(this._bombBoard[rowIndex][collIndex] === 'B'){
      this._playerBoard[rowIndex[collIndex]] = 'B';
    }
    else{
      this._playerBoard[rowIndex][collIndex] = this.getNumNeighbombs(rowIndex, collIndex);
    }
    this._numberOfTiles --;
  }

  //Getting the number of neighboring bombs
  getNumNeighbombs(rowIndex, collIndex){
    const neighborOffsets =
     [[-1, -1],
      [-1, 0],
      [-1, 1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [0, -1]];
    const numOfRows = this._bombBoard.length;
    const numOfCollumns = this._bombBoard[1].length;
    let numOfBombs = 0;

    neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborCollIndex = collIndex + offset[1];
    console.log(neighborCollIndex);
    console.log(neighborRowIndex);
    if(neighborRowIndex >= 0 && neighborRowIndex < numOfRows &&
      neighborCollIndex >= 0 && neighborCollIndex < numOfCollumns){
        if(this._bombBoard[neighborRowIndex][neighborCollIndex] === 'B'){
          numOfBombs++;
        }
      }
    });
    return numOfBombs;
  }

  //Are there anymore non-bomb tiles to be flipped?
  hasSafeTiles(){
    return (this._numberOfBombs === this._numberOfTiles);
  }

  //Printing the board
  print(){
    console.log(this._playerBoard.map(row => row.join(" | ")).join("\n"));
  }

  //Generating the board
  static generatePlayerBoard(numRows, numCollumns){
    const board = [];
    for (let x = 0; x < numRows; x++){
      const row = [];
      for (let y = 0; y < numCollumns; y++){
        row.push(" ");
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numRows, numCollumns, numBombs){
    const board = [];
    for (let x = 0; x < numRows; x++){
      const row = [];
      for (let y = 0; y < numCollumns; y++){
        row.push(null);
      }
      board.push(row);
    }
    //Placing the bombs randomly
    let numBombsPlaced = 0;
    while(numBombsPlaced < numBombs){
      let randRowInd = Math.floor(Math.random() * numRows);
      let randCollInd = Math.floor(Math.random() * numCollumns);
      if(board[randRowInd][randCollInd] !== "B"){
        board[randRowInd][randCollInd] = "B";
        numBombsPlaced++;
      }
    }
    return board;
  }
}

const g = new Game(10,10,10);
g.playMove(3,8);
