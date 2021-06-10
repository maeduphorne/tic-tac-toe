class Player {
  constructor(id, token){
    this.id =
    this.token =
    this.wins = [];
  }

  saveWinstoStorage() {
    // stringify wins each time the variable is updated and set to storage
  }

  retrieveWinsFromStorage() {
    //get wins from storage, parse to represents a JS object
    //update number in data model (reassign this.wins to whatever number number is in localStorage)
    //display on DOM
  }
  winAGame() {
    // if this player wins a game,
    // incremement number of wins by 1
  }
}
