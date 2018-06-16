import {createGame} from './cli/createGame'
import {createIO} from './cli/createIO'

const io = createIO()

createGame(io)
  .then((game) => game.run())
  .then(() => io.close())
