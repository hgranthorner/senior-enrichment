import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

// action types

const GET_STUDENTS = Symbol('redux get students')
const GET_CAMPUSES = Symbol('redux get campuses')

// action creators

const getStudentsCreator = (students) => ({ type: GET_STUDENTS, students })
const getCampusesCreator = (campuses) => ({ type: GET_CAMPUSES, campuses })

// reducers

const students = (state = [], action) => {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students
    default:
      return state
  }
}

const campuses = (state = [], action) => {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses
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

export default store
export { fetchCampuses, fetchStudents }