import store, { fetchStudents, fetchCampuses, deleteStudent, deleteCampus, postStudent, postCampus } from './store'
import { getStudentWithCampusName, getCampusWithStudents} from './utils'

export default store
export { fetchStudents, fetchCampuses,
  getStudentWithCampusName, getCampusWithStudents,
  deleteCampus, deleteStudent,
  postCampus, postStudent
}