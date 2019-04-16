import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ selectedPage }) => ({ selectedPage })

const Nav = ({ selectedPage }) => {

  return (
    <Fragment>
      <div className={'row margin-bottom-sm'}>
        <nav className={'nav col'}>
          <NavLink id="campuses-nav-link" className={'nav-link'} to={'/campuses'}>Campuses</NavLink>
          <NavLink id="students-nav-link" className={'nav-link'} to={'/students'}>Students</NavLink>
        </nav>
        <div className="d-flex flex-row-reverse col">
          {
            selectedPage === 'Campuses' ?
              <Link className={'btn btn-primary'} to={'/campuses/create'}>Add Campus</Link> :
              <Link className={'btn btn-primary'} to={'/students/create'}>Add Student</Link>
          }
        </div>
      </div>
      <hr style={{ borderColor: 'light-grey', borderWidth: '1px', borderStyle: 'solid' }}/>
    </Fragment>
  )
}

export default connect(mapStateToProps)(Nav)
