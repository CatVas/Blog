
const { random } = require('lodash')

module.exports = (arr = []) => {
  const idx = random(arr.length - 1)

  return arr[idx]
}
