import React from 'react';
import PostsList from './PostsList';
import { fetchTopPosts } from '../utils/api'

export default class Top extends React.Component {
  state = {
    posts: [],
    error: ""
  }

  componentDidMount() {
    fetchTopPosts()
      .then((posts) => {
        this.setState({
          posts
        })
      })
  }

  render() {
    return (
      <PostsList posts={this.state.posts} />
    )
  }
}