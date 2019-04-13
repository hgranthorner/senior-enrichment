const express = require('express')
const { apiRoutes } = require('./api')
const app = express()
const path = require('path')

const distPath = path.join(__dirname,'..', 'client', 'dist')
console.log(distPath)

app.use(express.static(distPath))
app.use('/api', apiRoutes)

module.exports = app
