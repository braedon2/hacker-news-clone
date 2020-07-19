import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostsList from './components/PostsList';
import { getTopPosts, getNewPosts } from './utils/api';

class App extends React.Component {
  render() {
    getTopPosts().then((data) => console.log(data));
    getNewPosts().then((data) => console.log(data));
    return (
      <div className="container">
        <PostsList posts={posts} />
      </div>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
