import {startGame} from './startGame'
import {createBoard} from '../board/createBoard'
import {Player} from '../player/Player'

describe('cli.startGame', () => {
  it('creates a game with a winner', async () => {
    const printer = fakePrinter()
    const players = playerXWins()
    await startGame(players, createBoard(3), printer)
    expect(printer.congratulate).to.have.been.calledWith(players[0])
  })

  it('is a draw game', async () => {
    const printer = fakePrinter()
    await startGame(noPlayerWins(), createBoard(3), printer)
    expect(printer.gameIsDraw).to.have.been.calledWith()
  })

  it('prints the board once then for each move', async () => {
    const printer = fakePrinter()
    await startGame(noPlayerWins(), createBoard(3), printer)
    expect(printer.showBoard.callCount).to.equal(10)
  })

  it('makes the player repeat the move if it is invalid', async () => {
    const printer = fakePrinter()
    const players = playerRepeatsMove()
    await startGame(players, createBoard(3), printer)
    expect(players[1].getMove.callCount).to.equal(3)
  })

  const playerXWins = () => [
    createPlayer('x')([1, 4, 7]),
    createPlayer('o')([2, 6, 9])
  ]

  const noPlayerWins = () => [
    createPlayer('x')([1, 3, 5, 6, 8]),
    createPlayer('o')([2, 4, 7, 9])
  ]

  const playerRepeatsMove = () => [
    createPlayer('x')([1, 4, 7]),
    createPlayer('o')([2, 4, 6])
  ]

  const createPlayer = (marker) => (moves) => {
    let rem = moves
    const getMove = spy(() => {
      const coordinate = rem[0]
      rem = rem.splice(1)
      return Promise.resolve(coordinate)
    })
    return new Player(marker, getMove)
  }

  const fakePrinter = () => ({
    showBoard: spy(),
    congratulate: spy(),
    gameIsDraw: spy(),
    validMove: (v) => v
  })
})
