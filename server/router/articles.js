
const { articles } = require('../data')

module.exports = {
  getArticles: {
    handler(req, res) {
      res.send(articles)
    },
    path: '/articles'
  }
}
