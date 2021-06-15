class Game {
  constructor() {
    this.player1 = new Player(1, '💧');
    this.player2 = new Player(2, '🔥');
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.turn = this.player1;
    this.won = false;
    this.totalPlays = 0;
  };

    toggleTurn() {
      if (this.turn === this.player1) {
        this.turn = this.player2
      } else if (this.turn === this.player2) {
        this.turn = this.player1
      };
    };

    tallyPlays() {
      this.totalPlays++;
    };
//trackdata
    assignPlayerSpace(index) {
      if (this.turn === this.player1 && this.gameBoard[index] === null) {
        this.gameBoard[index] = 1;
      } else if (this.turn === this.player2 && this.gameBoard[index] === null) {
        this.gameBoard[index] = 2;
      }
    };

    checkPlayerOneWin() {
      if (this.gameBoard[0] === 1 && this.gameBoard[1] === 1 && this.gameBoard[2] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[3] === 1 && this.gameBoard[4] === 1 && this.gameBoard[5] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[6] === 1 && this.gameBoard[7] === 1 && this.gameBoard[8] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[4] === 1 && this.gameBoard[6] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[4] === 1 && this.gameBoard[8] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[3] === 1 && this.gameBoard[6] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[1] === 1 && this.gameBoard[4] === 1 && this.gameBoard[7] === 1) {
        this.won = true;
        this.player1.addWin();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[5] === 1 && this.gameBoard[8] === 1) {
        this.won = true;
        this.player1.addWin();
      }
    }

    checkPlayerTwoWin() {
      if (this.gameBoard[0] === 2 && this.gameBoard[1] === 2 && this.gameBoard[2] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[3] === 2 && this.gameBoard[4] === 2 && this.gameBoard[5] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[6] === 2 && this.gameBoard[7] === 2 && this.gameBoard[8] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[4] === 2 && this.gameBoard[6] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[4] === 2 && this.gameBoard[8] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[3] === 2 && this.gameBoard[6] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[1] === 2 && this.gameBoard[4] === 2 && this.gameBoard[7] === 2) {
        this.won = true;
        this.player2.addWin();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[5] === 2 && this.gameBoard[8] === 2) {
        this.won = true;
        this.player2.addWin();
      }
    }

resetGameClass() {
    currentGame.gameBoard = [null, null, null, null, null, null, null, null, null];
    currentGame.turn = currentGame.player1;
    currentGame.won = false;
    currentGame.totalPlays = 0;
  }
}
