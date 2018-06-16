import {Player} from './Player'

export class IOPlayer extends Player {

  constructor(marker, name, io) {
    super(marker, getMove(marker, name, io))
    this.name = name
  }

}

const getMove = (marker, name, io) => async () => {
  io.print(`${name}, choose a box to place '${marker}' into:`)
  return parseInt(await io.ask('>> '))
}
