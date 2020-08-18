import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

const styles = {
  activeStyle: {
    color: 'rgb(187, 46, 31)'
  }
}

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink 
            className="nav-link" 
            to='/'
            exact
            activeStyle={styles.activeStyle}
          >
            Top
          </NavLink>
        </li>
        <li>
          <NavLink 
            className="nav-link" 
            to='/new'
            activeStyle={styles.activeStyle}
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