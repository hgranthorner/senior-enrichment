const express = require('express')
const { apiRoutes } = require('./api')
const app = express()

app.use('/api', apiRoutes)

app.get('/', (req, res, next) => {
  res.send('Hello')
})

module.exports = app
