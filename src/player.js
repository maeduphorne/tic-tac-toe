class Player {
  constructor(id, token){
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinstoStorage() {
    // stringify wins each time the variable is updated and set to storage
    localStorage.setItem(`${this.id}WinTotal`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    //get wins from storage, parse to represents a JS object
    //update number in data model (reassign this.wins to whatever number number is in localStorage)
    //display on DOM
    this.wins = JSON.parse(localStorage.getItems(`${this.id}WinTotal`));
  }

  addWin() {
    this.wins++
    // if this player wins a game,
    // incremement number of wins by 1
  }
}
