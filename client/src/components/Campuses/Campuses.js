import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCampuses } from '../../store'

const mapStateToProps = ({ campuses }) => {
  return { campuses }
}

const mapDispatchToProps = dispatch => {
  return { fetchCampuses: () => dispatch(fetchCampuses()) }
}

const Campuses = ({ campuses, fetchCampuses }) => {
  useEffect(() => {
    fetchCampuses()
  }, [])

  return (
    <div>
      <ul>
        {
          campuses.map(campus => (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                {campus.name}
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
)(Campuses)