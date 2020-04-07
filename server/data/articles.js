
const { lorem, random } = require('faker')
const categories = require('./categories')
const { generateArray, getRandomArrayElement } = require('../helpers')

const generateParagraphs = (min, max) => generateArray(min, max)
  .map(() => `<p>${lorem.paragraph()}</p>`)
  .join('')

const articles = generateArray(10, 20).map(() => ({
  category: getRandomArrayElement(categories).id,
  content: generateParagraphs(5, 10),
  id: random.uuid(),
  snippet: generateParagraphs(2, 4),
  title: lorem.words()
}))

module.exports = JSON.stringify(articles)
