import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchStudents } from '../../store'

const mapStateToProps = ({ students }) => {
  return { students }
}

const mapDispatchToProps = dispatch => {
  return { fetchStudents: () => dispatch(fetchStudents()) }
}

const Home = ({ students, fetchStudents }) => {
  useEffect(() => {
    fetchStudents()
      .then(() => console.log('Fetched students'))
  }, [])
  console.log(students)

  return (
    <div>
      <ul>
        {
          students.map(student => (
            <li>{student.firstName}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)