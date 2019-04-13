import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStudents, deleteStudent } from '../../store'

const mapStateToProps = ({ students }) => {
  return { students }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (id) => dispatch(deleteStudent(id))
  }
}

const Students = ({ students, fetchStudents, deleteStudent }) => {
  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <div>
      <Link className={'btn btn-primary'} to={'/students/create'}>Add Student</Link>
      <ul>
        {
          students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName}
              </Link>
              <button className={'btn btn-danger'} type={'button'} onClick={() => deleteStudent(student.id)}>
                X
              </button>
            </li>
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