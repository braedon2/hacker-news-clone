import React from 'react';
import PostsList from './PostsList';
import { fetchTopPosts } from '../utils/api'
import Loading from './Loading'

export default class Top extends React.Component {
  state = {
    posts: null,
    error: null,
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
      .catch((error) => {
        console.warn("Failed to fetch: ", error)
        this.setState({
          error: "Failed to fetch :(",
          loading: false
        })
      })
  }

  render() {
    const {posts, error, loading} = this.state;

    if (loading === true) {
      return <Loading />
    }

    return (
      <React.Fragment>
        {posts ? <PostsList posts={posts} /> : null}

        {error ? <p className="center-text">{error}</p> : null}
      </React.Fragment>
    )
  }
}