import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title'
import PostMetaInfo from './PostMetaInfo'



export default function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        if (post === null) 
          return null;
        return (
          <li key={post.id} className="post-preview">
            <Title title={post.title} url={post.url} id={post.id} />
            {/* <ItemInfo item={post} /> */}
            <PostMetaInfo 
              by={post.by} 
              time={post.time} 
              id={post.id} 
              descendants={post.descendants} />
          </li>
        )
      })}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
