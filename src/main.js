var board = document.getElementById('gameBoard');
var heading = document.getElementById('header');
var playerOneWins = document.getElementById('waterPlayerWins')
var playerTwoWins = document.getElementById('firePlayerWins')
var boardBoxes = document.querySelectorAll('game-board-box')
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
  //disableclickevent for icon?
  currentGame.tallyPlays();
  displayPlayerIcon();
  currentGame.toggleTurn();
  updateTurnDisplay();
  currentGame.checkPlayerOneWin();
  currentGame.player1.saveWinsToStorage();
  currentGame.checkPlayerTwoWin();
  currentGame.player2.saveWinsToStorage();
  winGame();
  // console.log(currentGame)
};

function winGame(){
  disableBoard();
  displayWinner();
  updateWinsDisplay();
  clearGameBoard();
};

function updateWinsDisplay() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2){
    playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1){
    playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  };
};

function displayPlayerIcon() {
  // it's adding disable click to the entire gameboard
    if (currentGame.turn === currentGame.player1 && event.target.id ===
      'zero'||'one'||'two'||'three'||'four'||'five'||'six'||'seven'||'eight'){
        console.log('player1')
      event.target.innerText = '💧'
      event.target.classList.add('disable-click');
    } else if (currentGame.turn === currentGame.player2 && event.target.id ===
      'zero'||'one'||'two'||'three'||'four'||'five'||'six'||'seven'||'eight'){
        console.log('player2')
      event.target.innerText = '🔥'
      event.target.classList.add('disable-click');
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
    board.classList.add('disable-click');
  };
};

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2){
    heading.innerText = '💧 won!';
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1){
    heading.innerText = '🔥 won!';
  } else if (currentGame.won === false && currentGame.totalPlays === 9){
    heading.innerText = `It's a draw!`
  }
}

function clearGameBoard() {
  setTimeout(function() {resetGame()},
  6000)
}

function resetGame() {
  if (currentGame.won === true || currentGame.totalPlays === 9) {
    currentGame.gameBoard = [null, null, null, null, null, null, null, null, null];
    currentGame.turn = currentGame.player1;
    currentGame.won = false;
    currentGame.totalPlays = 0;
    var gameBoardBox = document.querySelectorAll('.game-board-box')
    for ( var i = 0; i < gameBoardBox.length; i++){
      gameBoardBox[i].innerText = '';
      gameBoardBox[i].classList.remove('disable-click');
      gameBoard.classList.remove('disable-click');
    }
    heading.innerText = `It's 💧's turn`;
  }
};
