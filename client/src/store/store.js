import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// action types

const GET_STUDENTS = Symbol('redux get students')
const ADD_STUDENT = Symbol('redux add student')
const REMOVE_STUDENT = Symbol('redux remove student')
const GET_CAMPUSES = Symbol('redux get campuses')
const ADD_CAMPUS = Symbol('redux add campus')
const REMOVE_CAMPUS = Symbol('redux remove campus')
const SELECT_PAGE = Symbol('redux select page')

// action creators

const getStudentsCreator = (students) => ({ type: GET_STUDENTS, students })
const addStudentCreator = (student) => ({ type: ADD_STUDENT, student })
const removeStudentCreator = (studentId) => ({ type: REMOVE_STUDENT, studentId })
const getCampusesCreator = (campuses) => ({ type: GET_CAMPUSES, campuses })
const addCampusCreator = (campus) => ({ type: ADD_CAMPUS, campus })
const removeCampusCreator = (campusId) => ({ type: REMOVE_CAMPUS, campusId })
const selectPageCreator = (page) => ({ type: SELECT_PAGE, page })

// reducers

const students = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...state, action.student]
    case REMOVE_STUDENT:
      const students = [...state]
      return students.filter(s => s.id !== Number(action.studentId))
    default:
      return state
  }
}

const campuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [...state, action.campus]
    case REMOVE_CAMPUS:
      const campuses = [...state]
      return campuses.filter(c => c.id !== Number(action.campusId))
    default:
      return state
  }
}

const selectedPage = (state = 'Campuses', action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return action.page
    default:
      return state
  }
}

const store = createStore(
  combineReducers({ students, campuses, selectedPage }),
  applyMiddleware(thunkMiddleware)
)

// thunks

const fetchCampuses = () => {
  return dispatch => {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampusesCreator(campuses))
      })
  }
}

const fetchStudents = () => {
  return dispatch => {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudentsCreator(students))
      })
  }
}

const postCampus = (campus) => {
  return dispatch => {
    return axios.post('/api/campuses', campus)
      .then(() => dispatch(addCampusCreator(campus)))
  }
}

const postStudent = (student) => {
  return dispatch => {
    return axios.post('/api/students', student)
      .then(() => dispatch(addStudentCreator(student)))
  }
}

const deleteCampus = (campusId) => {
  return dispatch => {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(() => dispatch(removeCampusCreator(campusId)))
  }
}

const deleteStudent = (studentId) => {
  return dispatch => {
    return axios.delete(`/api/students/${studentId}`)
      .then(() => dispatch(removeStudentCreator(studentId)))
  }
}

export default store
export { fetchCampuses, fetchStudents, postCampus, postStudent, deleteCampus, deleteStudent, selectPageCreator }
