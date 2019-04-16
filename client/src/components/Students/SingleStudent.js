import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectPageCreator } from '../../store'

const mapStateToProps = ({ students, campuses }) => {
  return { students, campuses }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPage: (page) => dispatch(selectPageCreator(page))
  }
}

const SingleStudent = ({ students, campuses, studentId, selectPage }) => {
  useEffect(() => {
    selectPage('Students')
  }, [])
  const student = students.find(s => s.id === Number(studentId)) || {}
  let campus
  if (student)
    campus = campuses.find(c => c.id === student.campusId)

  return (
    <div className={'d-flex flex-column align-items-center'}>
      <h3>{student.firstName} {student.lastName}</h3>
      <div className="student-picture-container margin-bottom-sm">
        {
          student.imageUrl ?
          <img className={'student-picture'} alt={'A picture of the student'} src={student.imageUrl}/>
          : null
        }
      </div>
      {campus ? <Link to={`/campuses/${campus.id}`}>{campus.name}</Link> : null}<br/>
      <span>Email: {student.email}</span>
      <span>GPA: {student.gpa}</span>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent)