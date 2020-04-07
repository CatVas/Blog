
const { getArticles } = require('./articles')

module.exports = (app) => {
  app.get(getArticles.path, getArticles.handler)
}
