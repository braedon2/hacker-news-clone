import React from 'react';
import PostsList from './PostsList';
import { fetchNewPosts } from '../utils/api'

export default class Top extends React.Component {
  state = {
    posts: [],
    error: ""
  }

  componentDidMount() {
    fetchNewPosts()
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