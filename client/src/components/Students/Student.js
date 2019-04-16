import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../../store'

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  }
}

const Student = ({ student, deleteStudent }) => {
  return (
    <li key={student.id} className={'d-flex row margin-bottom-sm'}>
      <div className="col d-flex flex-column align-items-start">
        <h6>
          <Link to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
        </h6>
        <br/>
        <h6>{student.email}</h6>
      </div>
      <div className="d-flex flex-row-reverse col align-items-center">
        <div className="btn-group">
          <Link to={`/students/update/${student.id}`}>
            <button className={'btn btn-info'} type={'button'}>
              Update
            </button>
          </Link>
          <button className={'btn btn-danger'} type={'button'} onClick={() => deleteStudent(student.id)}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Student)