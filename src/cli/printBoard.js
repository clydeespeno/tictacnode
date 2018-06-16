import reduce from 'ramda/src/reduce'
import compose from 'ramda/src/compose'
import {zipWithIndex} from '../util'

export const printBoardOf = (size) => {
  const printer = printerOf(formatOf(size))
  return (board) => printer(board.board)
}

const printReducer = (format) => {
  return (print, [a, i]) => print + format.element(a, i) + format.end(i)
}

const printerOf = (format) => compose(reduce(printReducer(format), ''), zipWithIndex)

const formatOf = (size) => ({
  element: element(size),
  end: end(size)
})

const element = (size) => {
  const padd = paddOf(size)
  return (a, i) => padd(a || i + '')
}

const paddOf = (size) => {
  const max = ((size * size) + '').length
  return (e) => ' '.repeat(max - e.length + 1) + e + ' '
}

const end = (size) => {
  const dash = dashOf(size)
  const max = size * size
  return (i) => {
    if (i === max) {
      return ''
    }
    return i % size === 0 ? dash : '|'
  }
}

const dashOf = (size) => {
  const repeat = (((size * size) + '').length + 2) * size + size - 1
  return '\n' + '-'.repeat(repeat) + '\n'
}
