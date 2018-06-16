import {find3sOf} from './find3sOf'

describe('board.find3s', () => {
  const findOn3 = find3sOf(3)
  const findOn4 = find3sOf(4)

  it('finds east', () => {
    expect(findOn3(1, [2, 3])).to.be.true()
    expect(findOn3(4, [5, 6])).to.be.true()
    expect(findOn3(7, [8, 9])).to.be.true()

    expect(findOn4(1, [2, 3])).to.be.true()
    expect(findOn4(2, [3, 4])).to.be.true()
    expect(findOn4(5, [6, 7])).to.be.true()
  })

  it('finds south east', () => {
    expect(findOn3(1, [5, 9])).to.be.true()
    expect(findOn4(1, [6, 11])).to.be.true()
    expect(findOn4(2, [7, 12])).to.be.true()
    expect(findOn4(3, [8, 13])).to.be.false()
  })

  it('finds south', () => {
    expect(findOn3(1, [4, 7])).to.be.true()
    expect(findOn3(2, [5, 8])).to.be.true()
    expect(findOn3(3, [6, 9])).to.be.true()

    expect(findOn4(1, [5, 9])).to.be.true()
    expect(findOn4(5, [9, 13])).to.be.true()
  })

  it('finds south west', () => {
    expect(findOn3(3, [5, 7])).to.be.true()
    expect(findOn3(2, [4, 6])).to.be.false()

    expect(findOn4(3, [6, 9])).to.be.true()
    expect(findOn4(8, [11, 14])).to.be.true()
    expect(findOn4(2, [5, 12])).to.be.false()
    expect(findOn4(12, [15, 18])).to.be.false()
  })
})
