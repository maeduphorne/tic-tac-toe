class Game {
  constructor() {
    this.players = {
      player1: new Player(1, '💧'),
      player2: new Player(2, '🔥')
    };
    this.turn = this.players.player1;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
  };

    toggleTurn() {
      if (this.turn === this.players.player1) {
        this.turn = this.players.player2
      } else if (this.turn === this.players.player2) {
        this.turn = this.players.player1
      };
    };

//trackdata
    assignPlayerSpace(index) {
      if (this.turn === this.players.player1) {
        this.gameBoard[index] = 1;
      } else if (this.turn === this.players.player2) {
        this.gameBoard[index] = 2;
      }
    };

    checkPlayerOneWin() {
      if (this.gameBoard[0] === 1 && this.gameBoard[1] === 1 && this.gameBoard[2] === 1) {
        console.log('you win1!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[3] === 1 && this.gameBoard[4] === 1 && this.gameBoard[5] === 1) {
        console.log('you win2!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[6] === 1 && this.gameBoard[7] === 1 && this.gameBoard[8] === 1) {
        console.log('you win3!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[4] === 1 && this.gameBoard[6] === 1) {
        console.log('you win4!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[4] === 1 && this.gameBoard[8] === 1) {
        console.log('you win5!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[0] === 1 && this.gameBoard[3] === 1 && this.gameBoard[6] === 1) {
        console.log('you win6!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[1] === 1 && this.gameBoard[4] === 1 && this.gameBoard[7] === 1) {
        console.log('you win7!');
        this.players.player1.addWintoStorage();
      } else if (this.gameBoard[2] === 1 && this.gameBoard[5] === 1 && this.gameBoard[8] === 1) {
        console.log('you win8!');
        this.players.player1.addWintoStorage();
      } else {
        console.log('you lose')
      }
    }

    checkPlayerTwoWin() {
      if (this.gameBoard[0] === 2 && this.gameBoard[1] === 2 && this.gameBoard[2] === 2) {
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[3] === 2 && this.gameBoard[4] === 2 && this.gameBoard[5] === 2) {
        console.log('you win2!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[6] === 2 && this.gameBoard[7] === 2 && this.gameBoard[8] === 2) {
        console.log('you win3!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[4] === 2 && this.gameBoard[6] === 2) {
        console.log('you win4!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[4] === 2 && this.gameBoard[8] === 2) {
        console.log('you win5!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[0] === 2 && this.gameBoard[3] === 2 && this.gameBoard[6] === 2) {
        console.log('you win6!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[1] === 2 && this.gameBoard[4] === 2 && this.gameBoard[7] === 2) {
        console.log('you win7!');
        this.players.player2.addWintoStorage();
      } else if (this.gameBoard[2] === 2 && this.gameBoard[5] === 2 && this.gameBoard[8] === 2) {
        console.log('you win8!');
        this.players.player2.addWintoStorage();
      } else {
        console.log('you lose')
      }
    }

    resetBoard() {
      this.gameBoard = [null, null, null, null, null, null, null, null, null]
    }

};
