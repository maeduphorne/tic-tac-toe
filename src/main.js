var heading = document.getElementById('header');
var playerOneWins = document.getElementById('waterPlayerWins');
var playerTwoWins = document.getElementById('firePlayerWins');
var boardBoxes = document.querySelectorAll('.game-board-box');
var currentGame = new Game();

window.addEventListener('load', loadPage);

function loadPage() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  playerOneWins.innerText = `${currentGame.player1.wins} Wins`;
  playerTwoWins.innerText = `${currentGame.player2.wins} Wins`;
  for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].addEventListener('click', function(event){
      playTurn(event);
    });
  };
};

function playTurn(event) {
  for (var i = 0; i < boardBoxes.length; i++) {
    if (event.target.id === boardBoxes[i].id){
      currentGame.assignPlayerSpace(boardBoxes[i].id);
    };
  };
  displayPlayerIcon();
  currentGame.tallyPlays();
  currentGame.toggleTurn();
  updateTurnDisplay();
  currentGame.checkPlayerOneWin();
  currentGame.player1.saveWinsToStorage();
  currentGame.checkPlayerTwoWin();
  currentGame.player2.saveWinsToStorage();
  winGame();
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
    if (currentGame.turn === currentGame.player1){
      event.target.innerText = '💧';
      event.target.classList.add('disable-click');
    } else if (currentGame.turn === currentGame.player2){
      event.target.innerText = '🔥';
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
    for (var i = 0; i < boardBoxes.length; i++) {
      boardBoxes[i].classList.add('disable-click');
    };
  };
};

function displayWinner() {
  if (currentGame.won === true && currentGame.turn === currentGame.player2){
    heading.innerText = '💧 won!';
  } else if (currentGame.won === true && currentGame.turn === currentGame.player1){
    heading.innerText = '🔥 won!';
  } else if (currentGame.won === false && currentGame.totalPlays === 9){
    heading.innerText = `It's a draw!`;
  };
};

function clearGameBoard() {
  setTimeout(function() {resetGame()},
  5000);
};

function resetGame() {
  if (currentGame.won === true || currentGame.totalPlays === 9) {
    currentGame.resetGameClass();
    for ( var i = 0; i < boardBoxes.length; i++){
      boardBoxes[i].innerText = '';
      boardBoxes[i].classList.remove('disable-click');
    };
    heading.innerText = `It's 💧's turn`;
  };
};
