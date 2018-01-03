# Minesweeper
// A JavaScript Minesweeper game using the command line.
// Download files to a single folder or directory.

// In the command line, navigate to the directory and run "node" (NOTE: must have NodeJS installed)
// Run ".load game.js" to load the contents of the game.
// Create a Game instance using the following constructor:
Game (numberOfRows, numberOfColumns, numberOfBombs)
// For example:
let game = new Game(10, 10, 15);
// Then playMoves with the following function:
playMove(y-axis-index, x-axis-index)
// For example:
game.playMove(0, 0); (Top left corner)
game.playMove(9, 9); (Bottom right corner)
// When done run `.exit`
