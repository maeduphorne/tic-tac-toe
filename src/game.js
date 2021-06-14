class Game {
  constructor() {
    this.player1 = new Player(1, '💧');
    this.player2 = new Player(2, '🔥');

    this.turn = this.player1;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    this.won = false;
  };

    toggleTurn() {
      if (this.turn === this.player1) {
        this.turn = this.player2
      } else if (this.turn === this.player2) {
        this.turn = this.player1
      };
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
        console.log('you win1!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[3] === 1 && this.gameBoard[4] === 1 && this.gameBoard[5] === 1) {
        this.won = true;
        console.log('you win2!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[6] === 1 && this.gameBoard[7] === 1 && this.gameBoard[8] === 1) {
        this.won = true;
        console.log('you win3!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[4] === 1 && this.gameBoard[6] === 1) {
        console.log('you win4!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[4] === 1 && this.gameBoard[8] === 1) {
        console.log('you win5!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[3] === 1 && this.gameBoard[6] === 1) {
        console.log('you win6!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[1] === 1 && this.gameBoard[4] === 1 && this.gameBoard[7] === 1) {
        console.log('you win7!');
        this.player1.addWintoStorage();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[5] === 1 && this.gameBoard[8] === 1) {
        console.log('you win8!');
        this.player1.addWintoStorage();
      } else {
        console.log('you lose')
      }
    }

    checkPlayerTwoWin() {
      if (this.gameBoard[0] === 2 && this.gameBoard[1] === 2 && this.gameBoard[2] === 2) {
        this.won = true;
        this.player2.addWintoStorage();
      } else if (this.gameBoard[3] === 2 && this.gameBoard[4] === 2 && this.gameBoard[5] === 2) {
        console.log('you win2!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[6] === 2 && this.gameBoard[7] === 2 && this.gameBoard[8] === 2) {
        console.log('you win3!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[4] === 2 && this.gameBoard[6] === 2) {
        console.log('you win4!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[4] === 2 && this.gameBoard[8] === 2) {
        console.log('you win5!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[3] === 2 && this.gameBoard[6] === 2) {
        console.log('you win6!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[1] === 2 && this.gameBoard[4] === 2 && this.gameBoard[7] === 2) {
        console.log('you win7!');
        this.player2.addWintoStorage();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[5] === 2 && this.gameBoard[8] === 2) {
        console.log('you win8!');
        this.player2.addWintoStorage();
      } else {
        console.log('you lose')
      }
    }

    resetBoard() {
      this.gameBoard = [null, null, null, null, null, null, null, null, null]
    }

};
