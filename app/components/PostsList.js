import React from 'react';
import PropTypes from 'prop-types';

function PostPreview({ post }) {
  let date = new Date(Number(post.time));
  let dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    + `, ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}`
    + `:${date.getMinutes()} ${date.getHours() > 11 ? 'PM' : 'AM'}`;
  return (
    <div className='post-preview'>
      <a className='link' href={post.url}>
        {post.title}
      </a>
      <p>by {post.by} on {dateString} with {post.descendants} comments</p>
    </div>
  );
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostPreview post={post} />
        </li>
      ))}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
