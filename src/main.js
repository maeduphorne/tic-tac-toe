var heading = document.getElementById('header');
var playerOneWins = document.getElementById('waterPlayerWins')
var playerTwoWins = document.getElementById('firePlayerWins')
var boardBoxes = document.querySelectorAll('.game-board-box')
var currentGame = new Game();

window.addEventListener('load', loadPage);

function loadPage() {
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  playerOneWins.innerText = `${currentGame.player1.wins} Wins`
  playerTwoWins.innerText = `${currentGame.player2.wins} Wins`
  for (var i = 0; i < boardBoxes.length; i++) {
    console.log(boardBoxes)
    boardBoxes[i].addEventListener('click', function(event){
      playTurn(event);
    });
  }
  };

function playTurn(event) {
  console.log(boardBoxes);
  for (var i = 0; i < boardBoxes.length; i++) {
    if (event.target.id === boardBoxes[i].id){
      currentGame.assignPlayerSpace(boardBoxes[i].id);
    }
  }
  currentGame.tallyPlays();
  displayPlayerIcon();
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
      event.target.innerText = '💧'
      event.target.classList.add('disable-click');
    } else if (currentGame.turn === currentGame.player2){
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
    for (var i = 0; i < boardBoxes.length; i++) {
    boardBoxes[i].classList.add('disable-click');
  }
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
