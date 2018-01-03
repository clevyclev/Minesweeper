// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import {Board} from './board.js';

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
