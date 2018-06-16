export class Printer {

  constructor(io, printBoard) {
    this.io = io
    this.printBoard = printBoard
  }

  showBoard(board) {
    this.io.print('')
    this.io.print(this.printBoard(board))
    this.io.print('')
  }

  congratulate(player) {
    this.io.print(`Congratulations ${[player.name]}! You have won.`)
  }

  gameIsDraw() {
    this.io.print('Out of moves. The game is a draw')
  }

  validMove(isValid) {
    if (!isValid) {
      this.io.print('That box is already taken. Try again. ')
    }
    return isValid
  }

}
