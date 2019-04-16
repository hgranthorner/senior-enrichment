import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Campus from './Campus'
import { Student } from '../Students'
import { selectPageCreator } from '../../store'

const mapStateToProps = ({ students, campuses }) => {
  return { students, campuses }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPage: (page) => dispatch(selectPageCreator(page))
  }
}

const SingleCampus = ({ students, campuses, campusId, selectPage }) => {
  useEffect(() => {
    selectPage('Campuses')
  }, [])
  const campus = campuses.find(c => c.id === Number(campusId)) || {}
  let studentsAtCampus
  if (campus)
    studentsAtCampus = students.filter(s => s.campusId === campus.id)

  return (
    <div>
      <Campus campus={campus}/>
      <h3>Students at {campus.name}</h3>
      <ul>
        {
          studentsAtCampus.map(student => (
            <Student key={student.id} student={student}/>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus)