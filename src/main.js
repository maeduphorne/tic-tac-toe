var board = document.getElementById('gameBoard');
var currentGame = new Game();

board.addEventListener('click', function(event){
  playTurn(event);
});


function playTurn(event) {
  if (event.target.id === 'zero') {
    currentGame.assignPlayerSpace(0);
  } else if (event.target.id === 'one') {
    currentGame.assignPlayerSpace(1);
  } else if (event.target.id === 'two') {
    currentGame.assignPlayerSpace(2);
  } else if (event.target.id === 'three') {
    currentGame.assignPlayerSpace(3);
  } else if (event.target.id === 'four') {
    currentGame.assignPlayerSpace(4);
  } else if (event.target.id === 'five') {
    currentGame.assignPlayerSpace(5);
  } else if (event.target.id === 'six') {
    currentGame.assignPlayerSpace(6);
  } else if (event.target.id === 'seven') {
    currentGame.assignPlayerSpace(7);
  } else if (event.target.id === 'eight') {
    currentGame.assignPlayerSpace(8);
  };
  currentGame.checkPlayerOneWin();
  currentGame.checkPlayerTwoWin();
  currentGame.toggleTurn();
  displayBoard();
  // this is how you get the index number to feed to a diff. function that reassigns the index it receives to the id of the player whose turn it currently is
  // next function would use a conditional to take the fed in index and determine what the new value would be based on the value of this.turn
};

function displayBoard() {
    if (currentGame.turn === currentGame.players.player1){
      event.target.innerText = '💧'
    } else if (currentGame.turn === currentGame.players.player2){
      event.target.innerText = '🔥'
    }
  }
//   //if the player space is assigned 1, then change the inner text to 'water'
//   //if the player space is assigned 2, then change the inner text to 'flame'

// upon click of the game-board, grab the closest game-board-box and update the innerText to the player's token whose turn it currently is
//
