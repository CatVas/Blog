
const express = require('express')
const { PORT } = require('./constants')
const router = require('./router')

const app = express()

router(app)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
