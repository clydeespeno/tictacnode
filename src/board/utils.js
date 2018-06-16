export const hasPairs = (pair, [head, ...tail], found = 0) => {
  return found === 2 ||
    !!head && hasPairs(pair, tail, found + foundCount(pair, head))
}

const foundCount = (pair, head) =>
  (head === pair[0] || head === pair[1]) ? 1 : 0

