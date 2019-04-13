import store, { fetchCampuses, fetchStudents } from './store'

const getCampusWithStudents = async (campusId) => {
  Promise.all([fetchCampuses(), fetchStudents()])
    .then(() => {
      const { campuses, students } = store.getState()
      const campus = campuses.find(c => c.id === Number(campusId))
      const campusStudents = students.filter(s => s.campusId = campus.id)

      return { ...campus, students: campusStudents }
    })
}

const getStudentWithCampusName = (studentId, students, campuses) => {
  const student = students.find(s => s.id === Number(studentId))
  const campusName = campuses.find(c => student.campusId = c.id).name
  return {...student, campusName }
}

// const getCampusesAndStudents = async () => {
//   try {
//     const {campuses, students} = store.getState()
//     console.log(store.getState())
//     if (campuses.length === 0 && students.length === 0) {
//       await Promise.all([fetchStudents(), fetchCampuses()])
//       return store.getState()
//     } else if (campuses.length === 0) {
//       await fetchCampuses()
//       return store.getState()
//     } else if (students.length === 0) {
//       await fetchStudents()
//       return store.getState()
//     } else {
//       return {campuses, students}
//     }
//   } catch(e) {
//     console.log('In getCampusesAndStudents: ', e)
//   }
// }

export { getCampusWithStudents, getStudentWithCampusName }
