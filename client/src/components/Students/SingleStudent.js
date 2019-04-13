import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = ({ students, campuses }) => {
  return { students, campuses }
}

const SingleStudent = ({ students, campuses, studentId }) => {
  const student = students.find(s => s.id === Number(studentId)) || {}
  let campus
  if (student)
    campus = campuses.find(c => c.id === student.campusId)

  return (
    <div>
      {student.firstName} {student.lastName}: <br />
      {student.imageUrl}<br />
      { campus ? <Link to={`/campuses/${campus.id}`}>{campus.name}</Link> : null }<br />
      {student.email}<br />
      {student.gpa}<br />
    </div>
  )
}

export default connect(
  mapStateToProps,
)(SingleStudent)