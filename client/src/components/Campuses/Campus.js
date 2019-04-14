import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteCampus} from '../../store'

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus: (id) => dispatch(deleteCampus(id))
  }
}

const Campus = ({campus, deleteCampus}) => {
  return (
    <li>
      <div className="container campus-header">
        <Link to={`/campuses/${campus.id}`}>
          <h3 className="campus-title">{campus.name}</h3>
        </Link>
        <h6 className="campus-description">
          <span>{campus.address}</span>
        </h6>
      </div>
      <div className="container row">
        <img alt={'A picture of a university'} src={campus.imageUrl} className={'col'}/>
        <p className={'col'}>{campus.description}</p>
      </div>
      <button className={'btn btn-danger'} type={'button'} onClick={() => deleteCampus(campus.id)}>
        X
      </button>
    </li>
  )
}

export default connect(
  null, mapDispatchToProps
)(Campus)