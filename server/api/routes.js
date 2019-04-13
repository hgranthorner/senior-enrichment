const { Student, Campus }  = require('../db')
const router = require('express').Router()

router.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next)
})

module.exports = router