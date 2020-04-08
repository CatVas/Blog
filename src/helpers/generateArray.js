
import { random, range } from 'lodash'

/**
 * @param {Number} minLength - minimal possible array length
 * @param {Number} maxLength - maximum possible array length
*/
export default (minLength = 0, maxLength = 0) => range(
  1,
  random(minLength, maxLength)
)
