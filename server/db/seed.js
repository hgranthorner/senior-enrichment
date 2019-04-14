const db = require('./db')
const Student = require('./Student')
const Campus = require('./Campus')
const faker = require('faker')
const loremIpsum = require('lorem-ipsum').loremIpsum

const randomName = () => `${faker.name.firstName()} ${faker.name.lastName()}`
const randomCampusName = () => {
  return `${randomName()} University`
}
const randomEmail = () => faker.internet.email()
const randomAddress = () => faker.address.streetAddress()
const randomGPA = () => (Math.random() * 4).toFixed(2)
const randomImageUrl = () => faker.image.imageUrl()
const generateLorem = (count, min, max) => {
  return loremIpsum({
    count,
    paragraphLowerBound: min,
    paragraphUpperBound: max,
    units: 'paragraphs'
  })
}

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = () => {
  return db.sync({ force: true })
    .then(async() => {
      await Promise.all([
        Campus.create({ name: randomCampusName(), address: randomAddress(), description: generateLorem(2, 3, 7), imageUrl: randomImageUrl() }),
        Campus.create({ name: randomCampusName(), address: randomAddress(), description: generateLorem(2, 3, 7), imageUrl: randomImageUrl() }),
        Campus.create({ name: randomCampusName(), address: randomAddress(), description: generateLorem(2, 3, 7), imageUrl: randomImageUrl() }),
        Campus.create({ name: randomCampusName(), address: randomAddress(), description: generateLorem(2, 3, 7), imageUrl: randomImageUrl() })
      ])

      await Promise.all([
        Student.create({ campusId: 1, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 1, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 1, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 2, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 2, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 2, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 3, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 3, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 3, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 4, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 4, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 4, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 1, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 2, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 3, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 4, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 1, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() }),
        Student.create({ campusId: 2, firstName: randomName().split(' ')[0], lastName: randomName().split(' ')[1], email: randomEmail(), gpa: randomGPA() })
      ])
    })
    .catch(e => console.log(e))
}
