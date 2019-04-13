import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// action types

const GET_STUDENTS = Symbol('redux get students')
const ADD_STUDENT = Symbol('redux add student')
const GET_CAMPUSES = Symbol('redux get campuses')
const ADD_CAMPUS = Symbol('redux add campus')

// action creators

const getStudentsCreator = (students) => ({ type: GET_STUDENTS, students })
const addStudentCreator = (student) => ({ type: ADD_STUDENT, student })
const getCampusesCreator = (campuses) => ({ type: GET_CAMPUSES, campuses })
const addCampusCreator = (campus) => ({ type: ADD_CAMPUS, campus })

// reducers

const students = (state = [], action) => {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...state, action.student]
    default:
      return state
  }
}

const campuses = (state = [], action) => {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [...state, action.campus]
    default:
      return state
  }
}


const store = createStore(
  combineReducers({ students, campuses }),
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
      .then(() => addCampusCreator(campus))
  }
}

const postStudent = (student) => {
  return dispatch => {
    return axios.post('/api/students', student)
      .then(() => addStudentCreator(student))
  }
}

export default store
export { fetchCampuses, fetchStudents, postCampus, postStudent }