import reduce from 'ramda/src/reduce'
import compose from 'ramda/src/compose'
import {zipWithIndex} from '../util'

export class Board {

  constructor(board) {
    this.board = board
    this.size = Math.sqrt(board.length)
    this.inputMap = createInputMap(board)
    this.movesLeft = this.board.length - getMoves(this.inputMap)
  }

  at(coordinate) {
    return this.board[coordinate - 1] || coordinate + ''
  }

  mark(mark, coordinate) {
    if (!this.board[coordinate - 1]) {
      this.board[coordinate - 1] = mark
      this.inputMap = updateInput(this.inputMap, [mark, coordinate])
      this.movesLeft = this.movesLeft - 1
      return true
    }
    return false
  }

  hasMovesLeft() {
    return this.movesLeft > 0

  }

}

const getMoves = compose(reduce((moves, m) => moves + m.length, 0), Object.values)

const updateInput = (map, [a, i]) => ({...map, ...move(map, a, i)})

const move = (map, a, i) => a ? {[a]: sortedInsert(i, map[a])} : {}

const sortedInsert = (i, [head, ...tail] = [], sorted = []) => {
  if (head < i && tail.length) {
    sorted.push(head)
    return sortedInsert(i, tail, sorted)
  }
  if (head > i) {
    sorted.push(i)
    sorted.push(head)
  } else {
    if (head) {
      sorted.push(head)
    }
    sorted.push(i)
  }
  return sorted.concat(tail)
}

const createInputMap = compose(reduce(updateInput, {}), zipWithIndex)
