import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {ThemeConsumer } from '../contexts/theme'
import ItemInfo from './ItemInfo'

export default function PostPreview({ post, large }) {
  let style = {}
  if (large) {
    style = { fontSize: 32 }
  }

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="post-preview">
          {post.url !== undefined ? 
           <a className={`link-${theme}`} style={style} href={post.url}>
            {post.title}
            </a>
          : <Link 
              className={`link-${theme}`}
              style={style}
              to={{
                pathname: "/post",
                search: `id=${post.id}`
              }}>
              {post.title}
            </Link>
          }
          <ItemInfo item={post} />
        </div>
      )}
    </ThemeConsumer>
  );
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};