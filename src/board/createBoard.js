import {WinBy3} from './WinBy3'

export const createBoard = (size) => new WinBy3(new Array(size * size))
