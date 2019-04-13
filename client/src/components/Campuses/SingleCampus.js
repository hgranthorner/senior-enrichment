import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ students, campuses }) => {
  return { students, campuses }
}

const SingleCampus = ({ students, campuses, campusId }) => {
  const campus = campuses.find(c => c.id === Number(campusId)) || {}
  let studentsAtCampus
  if (campus)
    studentsAtCampus = students.filter(s => s.campusId === campus.id)

  return (
    <div>
      {campus.name}
      <ul>
        {
          studentsAtCampus.map(student => (
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
)(SingleCampus)