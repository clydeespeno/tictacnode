import find from 'ramda/src/find'
import {hasPairs} from './utils'

export const find3sOf = (size) => {
  const directions = [
    east(size),
    southeast(size),
    south(size),
    southwest(size)
  ]

  return (start, marks) => !!find((dir) => dir(start, marks), directions)
}

const east = (size) => {
  const maxRight = size - 2
  return (start, marks) => {
    return start % size <= maxRight && hasPairs([start + 1, start + 2], marks)
  }
}

const diagonal = (gradient) => (size) => {
  const distance = size + gradient
  const maxDistance = distance * 2
  const max = size * size
  const isDiagonal = isDiagonalOf(gradient, size)
  return (start, marks) => {
    const mid = start + distance
    const last = start + maxDistance
    return max - start >= maxDistance && isDiagonal(start, mid, last) && hasPairs(
      [mid, last],
      marks
    )
  }
}

const isDiagonalOf = (gradient, size) => {
  const isNextStep = isNextStepOf(gradient, size)
  return (start, mid, last) =>
    isNextStep(start, mid) && isNextStep(mid, last)
}

const isNextStepOf = (gradient, size) => {
  const correctGradient = correctGradientOf(gradient, size)
  const correctStep = correctStepOf(gradient, size)
  return (start, next) => {
    return correctStep(start, next) && correctGradient(start, next)
  }
}

const correctGradientOf = (gradient, size) => {
  const mod = modOf(size)
  return (start, next) => mod(next) - mod(start) === gradient
}

const modOf = (size) => (value) => (value - 1) % size

const correctStepOf = (gradient, size) => (start, next) =>
  start + size + gradient === next

const southeast = diagonal(1)

const south = (size) => {
  const maxBot = size * 2
  const max = size * size
  return (start, marks) =>
    start + maxBot <= max && hasPairs([start + size, start + maxBot], marks)
}

const southwest = diagonal(-1)
