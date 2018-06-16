import {Board} from './board'
import {find3sOf} from './find3sOf'

export class WinBy3 extends Board {

  constructor(board) {
    super(board)
    this.winnerOf = winnerOf(this.size)
  }

  winner() {
    return this.winnerOf(this.inputMap)
  }

}

const winnerOf = (size) => {
  const has3s = has3sOf(size)
  return (inputMap) => {
    for (const prop in inputMap) {
      if (has3s(inputMap[prop])) {
        return prop
      }
    }
    return null
  }
}

const has3sOf = (size) => {
  const find3s = find3sOf(size)
  const rec = ([head, ...tail] = []) => {
    if (!tail.length) {
      return false
    }
    return find3s(head, tail) || rec(tail)
  }
  return rec
}
