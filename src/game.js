class Game {
  constructor() {
    this.players = {
      player1: new Player(1, '💧'),
      player2: new Player(2, '🔥')
    };
    this.turn = this.players.player1;
    this.gameBoard = [null, null, null, null, null, null, null, null, null];
    // this.possibleWins = [[1, 1, 1, 2, 2, null, null, null, null],
    // [2, 2, null, 1, 1, 1, null, null, null]]
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

    // checkWin() {
    //   var stringifiedBoard = JSON.stringify(this.gameBoard);
    //   // console.log(`stringified Board`, stringifiedBoard);
    //   for (var i = 0; i < this.possibleWins.length; i++) {
    //     var stringifiedWin = JSON.stringify(this.possibleWins[i]);
    //     // console.log(`stringified win`, stringifiedWin);
    //     if (stringifiedBoard === stringifiedWin) {
    //       alert('you won')
    //     }
    //       // if the value of the first index of each array within the possibleWins array is strictly equal to the second index within the possibleWins array, is strictly equal to the third index within the possibleWins array
    //       // console.log(`gameBoard index 0`, this.gameBoard[0])
    //       // console.log(`possible wins index 0/index0`, this.possibleWins[i][0])
    //     }
    // };

    // if these indices are equal, then it's a win
    checkPlayerOneWin() {
      // console.log(`index 0`, this.gameBoard[0]);
      // console.log(`index 1`, this.gameBoard[1]);
      // console.log(`index 2`, this.gameBoard[2]);
      if (this.gameBoard[0] === 1 && this.gameBoard[1] === 1 && this.gameBoard[2] === 1) {
        console.log('you win1!');
      } else if (this.gameBoard[3] === 1 && this.gameBoard[4] === 1 && this.gameBoard[5] === 1) {
        console.log('you win2!');
      } else if (this.gameBoard[6] === 1 && this.gameBoard[7] === 1 && this.gameBoard[8] === 1) {
        console.log('you win3!');
      } else if (this.gameBoard[2] === 1 && this.gameBoard[4] === 1 && this.gameBoard[6] === 1) {
        console.log('you win4!');
      } else if (this.gameBoard[0] === 1 && this.gameBoard[4] === 1 && this.gameBoard[8] === 1) {
        console.log('you win5!');
      } else if (this.gameBoard[0] === 1 && this.gameBoard[3] === 1 && this.gameBoard[6] === 1) {
        console.log('you win6!');
      } else if (this.gameBoard[1] === 1 && this.gameBoard[4] === 1 && this.gameBoard[7] === 1) {
        console.log('you win7!');
      } else if (this.gameBoard[2] === 1 && this.gameBoard[5] === 1 && this.gameBoard[8] === 1) {
        console.log('you win8!');
      } else {
        console.log('you lose')
      }
    }

    checkPlayerTwoWin() {
      // console.log(`index 0`, this.gameBoard[0]);
      // console.log(`index 1`, this.gameBoard[1]);
      // console.log(`index 2`, this.gameBoard[2]);
      if (this.gameBoard[0] === 2 && this.gameBoard[1] === 2 && this.gameBoard[2] === 2) {
        return 'you win1!'
      } else if (this.gameBoard[3] === 2 && this.gameBoard[4] === 2 && this.gameBoard[5] === 2) {
        console.log('you win2!');
      } else if (this.gameBoard[6] === 2 && this.gameBoard[7] === 2 && this.gameBoard[8] === 2) {
        console.log('you win3!');
      } else if (this.gameBoard[2] === 2 && this.gameBoard[4] === 2 && this.gameBoard[6] === 2) {
        console.log('you win4!');
      } else if (this.gameBoard[0] === 2 && this.gameBoard[4] === 2 && this.gameBoard[8] === 2) {
        console.log('you win5!');
      } else if (this.gameBoard[0] === 2 && this.gameBoard[3] === 2 && this.gameBoard[6] === 2) {
        console.log('you win6!');
      } else if (this.gameBoard[1] === 2 && this.gameBoard[4] === 2 && this.gameBoard[7] === 2) {
        console.log('you win7!');
      } else if (this.gameBoard[2] === 2 && this.gameBoard[5] === 2 && this.gameBoard[8] === 2) {
        console.log('you win8!');
      } else {
        console.log('you lose')
      }
    }

    resetBoard() {
      this.gameBoard = [null, null, null, null, null, null, null, null, null]
    }

};
