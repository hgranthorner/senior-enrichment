import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchStudents, deleteStudent, selectPageCreator } from '../../store'
import Student from './Student'

const mapStateToProps = ({ students }) => {
  return { students }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (id) => dispatch(deleteStudent(id)),
    selectPage: (page) => dispatch(selectPageCreator(page))
  }
}

const Students = ({ students, fetchStudents, selectPage }) => {
  useEffect(() => {
    selectPage('Students')
    fetchStudents()
  }, [])

  return (
    <div>
      <ul>
        {
          students.map(student => (
            <Student key={student.id} student={student} />
          ))
        }
      </ul>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students)