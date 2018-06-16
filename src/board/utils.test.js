import {hasPairs} from './utils'

describe('board.utils', () => {
  it('finds a pair', () => {
    expect(hasPairs([1, 2], [1, 3, 4, 2])).to.be.true()
    expect(hasPairs([1, 2], [1, 2, 4, 3])).to.be.true()
  })

  it('fails to find a pair', () => {
    expect(hasPairs([1, 2], [1, 3, 4, 5])).to.be.false()
    expect(hasPairs([1, 2], [6, 3, 4, 5])).to.be.false()
  })
})
