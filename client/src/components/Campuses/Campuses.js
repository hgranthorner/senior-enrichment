import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCampuses, selectPageCreator } from '../../store'
import Campus from './Campus'

const mapStateToProps = ({ campuses }) => {
  return { campuses }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    selectPage: (page) => dispatch(selectPageCreator(page))
  }
}

const Campuses = ({ campuses, fetchCampuses, selectPage }) => {
  useEffect(() => {
    selectPage('Campuses')
    fetchCampuses()
  }, [])

  return (
    <div>
      <ul className={'campus-list'}>
        {
          campuses.map(campus => (
            <Campus key={campus.id} campus={campus} />
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