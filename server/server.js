const app = require('./app')
const { seed } = require('./db')

const port = process.env.PORT || 63341

seed()
  .then(() => {
    app.listen(port, console.log(`Listening on port ${port}...`))
  })
