import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = ({ selectedPage }) => ({ selectedPage })

const Nav = ({ selectedPage }) => {

  return (
    <Fragment>
      <nav className={'nav'}>
        <NavLink id="campuses-nav-link" className={'nav-link'} to={'/campuses'}>Campuses</NavLink>
        <NavLink id="students-nav-link" className={'nav-link'} to={'/students'}>Students</NavLink>
      </nav>
      {
        selectedPage === 'Campuses' ?
          <Link className={'btn btn-primary'} to={'/campuses/create'}>Add Campus</Link> :
          <Link className={'btn btn-primary'} to={'/students/create'}>Add Student</Link>
      }
    </Fragment>
  )
}

export default connect(mapStateToProps)(Nav)
