import store, { fetchStudents, fetchCampuses,
  deleteStudent, deleteCampus, postStudent, postCampus, selectPageCreator } from './store'
import { getStudentWithCampusName, getCampusWithStudents} from './utils'

export default store
export { fetchStudents, fetchCampuses, selectPageCreator,
  getStudentWithCampusName, getCampusWithStudents,
  deleteCampus, deleteStudent, postCampus, postStudent,
}