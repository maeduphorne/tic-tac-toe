class Game {
  constructor() {
    this.players = {
      player1: new Player(1, '💧'),
      player2: new Player(2, '🔥')
    };
    this.turn = this.players.player1;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.possibleWins = [
    [this.gameBoard[0], this.gameBoard[1], this.gameBoard[3]],
    [this.gameBoard[3], this.gameBoard[4], this.gameBoard[5]],
    [this.gameBoard[6], this.gameBoard[7], this.gameBoard[8]],
    [this.gameBoard[2], this.gameBoard[4], this.gameBoard[6]],
    [this.gameBoard[0], this.gameBoard[4], this.gameBoard[8]],
    [this.gameBoard[0], this.gameBoard[3], this.gameBoard[6]],
    [this.gameBoard[1], this.gameBoard[4], this.gameBoard[7]],
    [this.gameBoard[2], this.gameBoard[5], this.gameBoard[8]]];
  };

    toggleTurn() {
      if (this.turn === this.players.player1) {
        this.turn = this.players.player2
      } else if (this.turn === this.players.player2) {
        this.turn = this.players.player1
      };
    };

    assignPlayerSpace(index) {
      if (this.turn === this.players.player1) {
        this.gameBoard[index] = 1;
      } else if (this.turn === this.players.player2) {
        this.gameBoard[index] = 2;
      }
    };


    checkWin() {
      for (var i = 0; i < this.possibleWins.length; i++) {
        if (this.possibleWins[i][0] === this.possibleWins[i][1] === this.possibleWins[i][2]) {
          console.log(WIN!)
          // return true;
        }
        // else {
        //   return false;
        // }
      }
    };

    resetBoard() {
      this.gameBoard = [null, null, null, null, null, null, null, null, null]
    }

};
