import {startGame} from './startGame'
import {createBoard} from '../board/createBoard'
import {IOPlayer} from '../player/IOPlayer'
import {Printer} from '../Printer'
import {printBoardOf} from './printBoard'

export const createGame = async (io) => {
  const p1 = await createPlayer(io)(1, 'x')
  const p2 = await createPlayer(io)(2, 'o')

  const boardSize = await getBoardSize(io)

  const printer = createPrinter(boardSize, io)

  return {
    run: () => startGame([p1, p2], createBoard(boardSize), printer)
  }
}

const createPlayer = (io) => async (num, marker) => {
  io.print(`Enter name for Player ${num}:`)
  const name = await io.ask(`>> `)
  io.print('')
  return new IOPlayer(marker, name, io)
}

const getBoardSize = async (io) => {
  io.print(`Enter board size (n x n):`)
  const size = await io.ask(`>> `)
  io.print('')
  return parseInt(size)
}

const createPrinter = (boardSize, io) => new Printer(io, printBoardOf(boardSize))
