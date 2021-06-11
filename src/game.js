class Game {
  constructor() {
    this.players = {
      player1: new Player(1, '💧'),
      player2: new Player(2, '🔥')
    };
    this.turn = this.players.player1; //(method to toggle turn)
  };

    //toggle turn method
    // goal: switch off each turn between players
    // input: player id who has current turn
    // output: other player id assigned as this.turn value
    toggleTurn() {
      if (this.turn === this.players.player1) {
        this.turn = this.players.player2
      } else if (this.turn === this.players.player2) {
        this.turn = this.players.player1
      };
    };
};


// Two Player instances
  // should we create a players property with a value of an array and push 2 players in
  // OR instantiate 2 new players within the class
    //where would this go within the class? outside of the constructor? within a method?
  //create a method that instantiates 2 new players and pushes them into the players array
    // in the instantiations they need to accept parameters for ID and token
//keeping track of the data for the game board
  //keeping track of which player clicked where so that the correct token is able to display
  //9 different IDs?
  //

// A way to check the Game’s board data for win conditions
  // 2 identifiers for the squares - 1 ID for event bubbling to click on
    // player class will tell us which token to diaply using the game class's this.turn property
  // for the token displayed, we could associate a numerical value(?) and create a conditional saying that if there are 3 consecutive within the game board

// A way to detect when a game is a draw (no one has won)
  // conditional on the bigger wins conditional
  //if none of the win conditions are met, it's a draw, no increment to either player's wins value
  //refresh the board

// A way to reset the Game’s board to begin a new game
  // probably !setTimeOut()! OR setInterval()
    //game auto starts over - creates space between reset and end of game
    // feed setTimeOut the function to reset the page with new game board values and updated wins values
