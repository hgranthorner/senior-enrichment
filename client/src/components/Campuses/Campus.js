import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCampus } from '../../store'

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus: (id) => dispatch(deleteCampus(id))
  }
}

const Campus = ({ campus, deleteCampus }) => {
  return (
    <div className="margin-bottom-lg">
      <div className="row">
        <div className="campus-header col">
          <Link to={`/campuses/${campus.id}`}>
            <h3 className="campus-title">{campus.name}</h3>
          </Link>
          <h6 className="campus-description">
            <span>{campus.address}</span>
          </h6>
        </div>
        <div className="col d-flex flex-row-reverse align-items-center">
          <div className="btn-group">
            <Link to={`/campuses/update/${campus.id}`}>
              <button className={'btn btn-info'} type={'button'}>
                Update
              </button>
            </Link>
            <button className={'btn btn-danger'} type={'button'} onClick={() => deleteCampus(campus.id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img alt={'A picture of a university'} src={campus.imageUrl} className={'col'}/>
        <p className={'col'}>{campus.description}</p>
      </div>
    </div>
  )
}

export default connect(
  null, mapDispatchToProps
)(Campus)