import React from 'react';
import PostsList from './PostsList';
import { fetchTopPosts } from '../utils/api'
import Loading from './Loading'

export default class Top extends React.Component {
  state = {
    posts: [],
    error: "",
    loading: true
  }

  componentDidMount() {
    fetchTopPosts()
      .then((posts) => {
        this.setState({
          posts,
          loading: false
        })
      })
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />
    }

    return (
      <PostsList posts={this.state.posts} />
    )
  }
}