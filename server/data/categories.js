
const { lorem, random } = require('faker')
const { capitalize } = require('lodash')
const { generateArray } = require('../helpers')

module.exports = generateArray(4, 7).map(() => ({
  id: random.uuid(),
  name: capitalize(lorem.word())
}))
