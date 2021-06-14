var board = document.getElementById('gameBoard');
var currentGame = new Game();

board.addEventListener('click', function(event){
  playTurn(event);
});
// window.addEventListener('load', refreshPage);

// if this.win = true (in game class), then disable the board from clicks
// function refreshPage() {
//   enableBoard();
// };

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
  displayPlayerIcon();
  currentGame.toggleTurn();
  currentGame.checkPlayerOneWin();
  currentGame.checkPlayerTwoWin();
  gameWin();
  console.log(currentGame)
};

function displayPlayerIcon() {
    if (currentGame.turn === currentGame.player1){
      event.target.innerText = '💧'
    } else if (currentGame.turn === currentGame.player2){
      event.target.innerText = '🔥'
    };
  };

function gameWin(){
  if (currentGame.won === true) {
    board.classList.add('eliminate-click');
  };
}

// function disableBoard() {
//       //take off the event listener from the board
//   };
//
// function enableBoard() {
//   board.classList.remove('eliminate-click');
// }
