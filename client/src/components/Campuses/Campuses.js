import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCampuses, deleteCampus } from '../../store'

const mapStateToProps = ({ campuses }) => {
  return { campuses }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (id) => dispatch(deleteCampus(id))
  }
}

const Campuses = ({ campuses, fetchCampuses, deleteCampus }) => {
  useEffect(() => {
    fetchCampuses()
  }, [])

  return (
    <div>
      <Link className={'btn btn-primary'} to={'/campuses/create'}>Add Campus</Link>
      <ul>
        {
          campuses.map(campus => (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                {campus.name}
              </Link>
              <button className={'btn btn-danger'} type={'button'} onClick={() => deleteCampus(campus.id)}>
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
)(Campuses)