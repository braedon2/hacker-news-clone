import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'
import { getDateString } from '../utils/util'

export default function PostMetaInfo({ by, time, descendants, id }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`post-meta-info-${theme}`}>
          <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
          <span> on {getDateString(time)} </span>
          {typeof descendants === 'number' && (
            <span> 
              with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
            </span>
          )}
        </div>
      )}
    </ThemeConsumer>
  )
}

PostMetaInfo.propTypes = {
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendents: PropTypes.number,
  id: PropTypes.number,
}