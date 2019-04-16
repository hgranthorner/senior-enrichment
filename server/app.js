const express = require('express')
const cors = require('cors')
const { apiRoutes } = require('./api')
const app = express()
const path = require('path')
app.use(cors())

const distPath = path.join(__dirname,'..', 'client', 'dist')
console.log(distPath)

app.use(express.json())
app.use(express.static(distPath))
app.use('/api', apiRoutes)

module.exports = app
