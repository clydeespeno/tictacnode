import {createBoard} from './createBoard'
import reduce from 'ramda/src/reduce'

describe('Board', () => {

  it('creates a board with 3 x 3 dimension', () => {
    const board = createBoard(3)
    expect(board.size).to.equal(3)
    expect(board.board).to.have.length(9)
    expect(board.inputMap).to.deep.equal({})
    expect(board.hasMovesLeft()).to.be.true()
  })

  it('returns the index at a given position if there is no value', () => {
    const board = createBoard(3)
    expect(board.at(1)).to.equal('1')
  })

  it('sets board value given a position', () => {
    const board = createBoard(3)
    board.mark('x', 1)
    expect(board.at(1)).to.equal('x')
    expect(board.inputMap.x).to.deep.equal([1])
  })

  it('fails to set the board at a given position when it is already marked', () => {
    const board = createBoard(3)
    board.mark('x', 1)
    expect(board.at(1)).to.equal('x')
    expect(board.mark('o', 1)).to.be.false()
  })

  it('does not return anything when there is no winner', () => {
    const board = createBoard(3)
    expect(board.winner()).to.not.exist()
  })

  it('checks if there are moves left', () => {
    expect(marked3x3Board('x')([1, 2, 3, 4, 5, 6, 7, 8]).hasMovesLeft()).to.be.true()
    expect(marked3x3Board('x')([1, 2, 3, 4, 5, 6, 7, 8, 9]).hasMovesLeft()).to.be.false()
  })

  it('detects winner', () => {
    expect(marked3x3Board('x')([1, 4, 7]).winner()).to.equal('x')
    expect(marked3x3Board('o')([1, 4, 7]).winner()).to.equal('o')
    expect(marked3x3Board('x')([9, 3, 6]).winner()).to.equal('x')
    expect(marked3x3Board('x')([1, 6, 3, 9]).winner()).to.equal('x')
    expect(marked3x3Board('x')([2, 5, 8]).winner()).to.equal('x')
  })

  const markBoard = (mark) => (board) => reduce((board, coordinate) => {
    board.mark(mark, coordinate)
    return board
  }, board)

  const marked3x3Board = (mark) => markBoard(mark)(createBoard(3))

})
