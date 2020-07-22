import React from 'react';
import PropTypes from 'prop-types';
import {ThemeConsumer } from '../contexts/theme'

function PostPreview({ post }) {
  let date = new Date(post.time * 1000);
  let dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    + `, ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}`
    + `:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    + ` ${date.getHours() > 11 ? 'PM' : 'AM'}`;
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="post-preview">
        <a className={`link-${theme}`} href={post.url}>
          {post.title}
        </a>
        <p>by {post.by} on {dateString} with {post.descendants} comments</p>
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
