import React from 'react';
import PropTypes from 'prop-types';
import {ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'
import { getDateString } from '../utils/util'

function PostPreview({ post }) {
  let dateString = getDateString(post.time)
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="post-preview">
        <a className={`link-${theme}`} href={post.url}>
          {post.title}
        </a>
        <p>
          by&nbsp;
          <Link  
            className={`item-description-route-${theme}`}
            to={{
              pathname: '/user',
              search: `id=${post.by}`
            }}
          >
            {post.by}
          </Link>
          &nbsp;on {dateString} with&nbsp; 
          {post.descendants} comments
        </p>
      </div>
      )}
    </ThemeConsumer>
  );
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        if (post === null) 
          return null;
        return (
          <li key={post.id}>
            <PostPreview post={post} />
          </li>
        )
      })}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
