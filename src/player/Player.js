export class Player {

  constructor(marker, getMove) {
    this.marker = marker
    this.getMove = getMove
  }

  async move() {
    return [this.marker, await this.getMove()]
  }

}
