export const startGame = (players, board, printer) => {

  const game = async ([p, ...players], nextTurn) => {
    printer.showBoard(board)

    if (board.hasMovesLeft()) {
      let move
      do {
        move = await p.move()
      } while (!printer.validMove(board.mark(move[0], move[1])))

      const winner = board.winner()
      if (winner) {
        printer.showBoard(board)
        return printer.congratulate(p)
      }
      return nextTurn([...players, p], game)
    }

    return printer.gameIsDraw()
  }

  return game(players, game)
}
