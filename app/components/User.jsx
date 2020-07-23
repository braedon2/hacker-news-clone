import React from 'react'
import { fetchUser, fetchUserPosts } from '../utils/api'
import { getDateString } from '../utils/util'
const queryString = require('query-string')
import { ThemeConsumer } from '../contexts/theme'
import Loading from './Loading'
import PostsList from './PostsList'

export default class User extends React.Component {
  state = {
    user: null,
    posts: null,
    error: null
  }

  componentDidMount() {
    const user = queryString.parse(this.props.location.search).id
    console.log('parsed user: ' + user)
    fetchUser(user)
      .then((data) => {
        this.setState({
          user: data
        });
        return fetchUserPosts(data.submitted)
      })
      .then((posts) => this.setState({
        posts
      }))
      .catch((error) => {
        console.warn("Error: ", error);
        this.setState({
          error: "Failed to fetch :(",
        })
      })
  }

  loading() {
    return this.state.user === null && this.state.error === null;
  }

  loadingPosts() {
    return this.state.posts === null && this.state.error === null;
  }

  render() {
    let {user, posts, error } = this.state;

    if (this.loading()) {
      return <Loading text="Fetching user" />
    }

    return (
        <React.Fragment>
          {user ? 
            <React.Fragment>
              <div className="user-preview">
                <h1  className="hd-large">{user.id}</h1>
                <p >
                  joined <b>{getDateString(user.created)}</b> has <b>{user.karma.toLocaleString()}</b> karma
                </p>
              </div>
              <div dangerouslySetInnerHTML={{__html: user.about}} />
              <h2 className="hd-small">Posts</h2> 
            </React.Fragment>
          : null }

          {this.loadingPosts() ? <Loading text="Fetching posts" /> : null}

          {posts ? <PostsList posts={posts} /> : null}

          {error ? <p className="center-text">{error}</p> : null}
        </React.Fragment>
    )
  }
}