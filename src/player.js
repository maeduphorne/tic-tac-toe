class Player {
  constructor(id, token){
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}WinTotal`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.id}WinTotal`)) || 0;
  }

  addWin() {
    this.wins++
  }
}
