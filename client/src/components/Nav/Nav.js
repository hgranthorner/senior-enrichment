import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={'nav'}>
      <NavLink className={'nav-link'} to={'/campuses'}>Home</NavLink>
      <NavLink className={'nav-link'} to={'/students'}>Students</NavLink>
    </nav>
  )
}

export default Nav