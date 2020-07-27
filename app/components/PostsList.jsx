import React from 'react';
import PropTypes from 'prop-types';
import {ThemeConsumer } from '../contexts/theme'
import ItemInfo from './ItemInfo'
import PostPreview from './PostPreview'



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
