import {createBoard} from '../board/createBoard'
import {printBoardOf} from './printBoard'

describe('cli', () => {
  it('prints an empty 3 x 3 board', () => {
    const print = printBoardOf(3)
    expect(print(createBoard(3))).to.equal(
      ' 1 | 2 | 3 \n' +
      '-----------\n' +
      ' 4 | 5 | 6 \n' +
      '-----------\n' +
      ' 7 | 8 | 9 '
    )
  })

  it('prints an empty 4 x 4 board', () => {
    const print = printBoardOf(4)
    expect(print(createBoard(4))).to.equal(
      '  1 |  2 |  3 |  4 \n' +
      '-------------------\n' +
      '  5 |  6 |  7 |  8 \n' +
      '-------------------\n' +
      '  9 | 10 | 11 | 12 \n' +
      '-------------------\n' +
      ' 13 | 14 | 15 | 16 '
    )
  })

  it('prints a marked board', () => {
    const print = printBoardOf(3)
    const board = createBoard(3)

    whenBoardIsMarked(board)

    expect(print(board)).to.equal(
      ' x | 2 | 3 \n' +
      '-----------\n' +
      ' o | 5 | 6 \n' +
      '-----------\n' +
      ' x | 8 | 9 '
    )
  })

  const whenBoardIsMarked = (board) => {
    board.mark('x', 1)
    board.mark('o', 4)
    board.mark('x', 7)
  }
})
