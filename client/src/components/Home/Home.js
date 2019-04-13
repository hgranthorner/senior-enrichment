import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCampuses } from '../../store'

const mapStateToProps = ({ campuses }) => {
  return { campuses }
}

const mapDispatchToProps = dispatch => {
  return { fetchCampuses: () => dispatch(fetchCampuses()) }
}

const Home = ({ campuses, fetchCampuses }) => {
  useEffect(() => {
    fetchCampuses()
      .then(() => console.log('Fetched campuses'))
  }, [])
  console.log(campuses)

  return (
    <div>
      <ul>
        {
          campuses.map(campus => (
              <li>{campus.name}</li>
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