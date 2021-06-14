var board = document.getElementById('gameBoard');
var heading = document.getElementById('header');
var playerOneWins = document.getElementById('waterPlayerWins')
var playerTwoWins = document.getElementById('firePlayerWins')
var currentGame = new Game();

board.addEventListener('click', function(event){
  playTurn(event);
});
window.addEventListener('load', loadPage);

function loadPage() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  };

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
  updateTurnDisplay();
  currentGame.checkPlayerOneWin();
  currentGame.player1.saveWinsToStorage();
  currentGame.checkPlayerTwoWin();
  currentGame.player2.saveWinsToStorage();
  winGame();
  console.log(currentGame)
};

function winGame(){
  disableBoard();
  displayWinner();
  updateWinsDisplay();
  // refreshPage();
};

function updateWinsDisplay() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2){
    playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1){
    playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  };
};

function displayPlayerIcon() {
    if (currentGame.turn === currentGame.player1){
      event.target.innerText = '💧'
    } else if (currentGame.turn === currentGame.player2){
      event.target.innerText = '🔥'
    };
  };

function updateTurnDisplay() {
  if (currentGame.turn === currentGame.player1 && currentGame.won === false){
    heading.innerText = `It's 💧's turn`;
  } else if (currentGame.turn === currentGame.player2 && currentGame.won === false){
    heading.innerText = `It's 🔥's turn`;
  };
};

function disableBoard() {
  if (currentGame.won === true) {
    board.classList.add('eliminate-click');
  };
};

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2){
    heading.innerText = '💧 won!';
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1){
    heading.innerText = '🔥 won!';
  }
}

function refreshPage() {
  window.setTimeout(currentGame.resetBoard()
   5000);
}

// loop through buttons to update them to empty innerHTML
