const { Student, Campus } = require('../db')
const router = require('express').Router()

router.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next)
})

router.delete('/campuses/:id', (req, res, next) => {
  const id = Number(req.params.id)
  Campus.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.put('/campuses', (req, res, next) => {
  Campus.findByPk(Number(req.body.id))
    .then(campus => {
      campus.update(req.body)
      return campus.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next)
})

router.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.send(student))
    .catch(next)
})

router.delete('/students/:id', (req, res, next) => {
  const id = Number(req.params.id)
  Student.destroy({ where: { id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.put('/students', (req, res, next) => {
  Student.findByPk(Number(req.body.id))
    .then(student => {
      student.update(req.body)
      return student.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router