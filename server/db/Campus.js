const db = require('./db')

const Campus = db.define('campus', {
  name: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    constraints: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: db.Sequelize.TEXT,
    defaultValue: 'myImage :)'
  },
  address: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    constraints: {
      notEmpty: true
    }
  },
  description: {
    type: db.Sequelize.TEXT
  }
})

module.exports = Campus