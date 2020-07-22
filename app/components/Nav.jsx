import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

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
      <ThemeConsumer>
        {({ toggleTheme, theme }) => (
          <button 
            className="btn-clear" 
            style={{ fontSize: 30 }}
            onClick={toggleTheme}>
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        )}
      </ThemeConsumer>
    </nav>
  )
}