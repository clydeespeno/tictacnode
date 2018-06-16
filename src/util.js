import addIndex from 'ramda/src/addIndex'
import map from 'ramda/src/map'

export const mapi = addIndex(map)

export const zipWithIndex = mapi((a, i) => [a, i + 1])
