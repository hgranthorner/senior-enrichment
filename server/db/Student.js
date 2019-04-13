const db = require('./db')

const Student = db.define('student', {
  firstName: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: db.Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: db.Sequelize.TEXT,
    defaultValue: 'a nice image'
  },
  gpa: {
    type: db.Sequelize.FLOAT,
    validate: {
      max: 4,
      min: 0
    }
  }
})

module.exports = Student