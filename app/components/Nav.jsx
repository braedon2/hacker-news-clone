import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink 
            className="nav-link" 
            to='/'
            exact
            activeClassName="active-link"
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink 
            className="nav-link" 
            to='/new'
            activeClassName="active-link"
          >
            New
          </NavLink>
        </li>
      </ul>
      <button>
        theme button
      </button>
    </nav>
  )
}