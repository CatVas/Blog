
module.exports = {
  getArticles: {
    handler(req, res) {
      // console.log(req, res)
      res.send('articles array')
    },
    path: '/articles'
  }
}
