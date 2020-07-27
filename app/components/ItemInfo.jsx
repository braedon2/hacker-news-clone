import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'
import { getDateString } from '../utils/util'

export default function ItemInfo({ item }) {
  console.log('here')
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <p className="info">
          by&nbsp;
          <Link
            className={`item-description-route-${theme}`}
            to={{
              pathname: '/user',
              search: `id=${item.by}`
            }}
          >
            {item.by}
          </Link>
            &nbsp;on {getDateString(item.time)} 
          {item.descendants !== undefined ?
            <span>
              &nbsp;with&nbsp;
              <Link
                className={`item-description-route-${theme}`}
                to={{
                  pathname: '/post',
                  search: `id=${item.id}`
                }}
              >
                {item.descendants}
              </Link>
                &nbsp;comments
              </span>
            : null}
        </p>
      )}
    </ThemeConsumer>
  )
}