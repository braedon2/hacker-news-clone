import React from 'react';
import PostsList from './PostsList';
import { fetchNewPosts } from '../utils/api'
import Loading from './Loading'

export default class Top extends React.Component {
  state = {
    posts: [],
    error: "",
    loading: true
  }

  componentDidMount() {
    fetchNewPosts()
      .then((posts) => {
        this.setState({
          posts,
          loading: false
        })
      })
      .catch((error) => {
        console.warn("Error: ", error)
        this.setState({
          error: "Failed to fetch",
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