import { createStore, combineReducers } from 'redux'

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


const store = createStore(combineReducers({ students, campuses }))

export default store