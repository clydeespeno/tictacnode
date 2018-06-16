import {createGame} from './createGame'

describe('cli.createGame', () => {
  it('creates a game based on inputs', async () => {
    const io = fakeIo(createScript())
    const game = await createGame(io)
    expect(game).to.have.property('run')

    thenCreateQuestionsWereAsked(io)
    expect(io.ask.callCount).to.equal(3)
  })

  const createScript = () => [
    'foo',
    'bar',
    '3'
  ]

  const fakeIo = (script) => {

    let answers = script

    return {
      ask: spy(() => {
        const answer = answers[0]
        answers = answers.splice(1)
        return Promise.resolve(answer)
      }),
      print: spy(() => {})
    }
  }

  const thenCreateQuestionsWereAsked = (io) => {
    expect(io.print).to.have.been.calledWith('Enter name for Player 1:')
    expect(io.print).to.have.been.calledWith('Enter name for Player 2:')
    expect(io.print).to.have.been.calledWith('Enter board size (n x n):')
  }
})
