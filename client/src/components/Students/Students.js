import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStudents } from '../../store'

const mapStateToProps = ({ students }) => {
  return { students }
}

const mapDispatchToProps = dispatch => {
  return { fetchStudents: () => dispatch(fetchStudents()) }
}

const Students = ({ students, fetchStudents }) => {
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