import React from 'react'
import { fetchItem } from '../utils/api'
import { ThemeConsumer } from '../contexts/theme'
import Loading from './Loading'
import ItemInfo from './ItemInfo'
import PostPreview from './PostPreview'

const queryString = require('query-string')

function Comment({ comment }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`bg-${theme} comment`}>
          <ItemInfo item={comment} />
          <div dangerouslySetInnerHTML={{__html: comment.text}} />
        </div>
      )}
    </ThemeConsumer>
  )
}

function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  )
}

export default class Post extends React.Component {
  state = {
    post: null,
    comments: null,
    error: null
  }

  componentDidMount() {
    const postId = queryString.parse(this.props.location.search).id
    fetchItem(postId)
      .then((post) => {
        this.setState({
          post
        })
        if (post.kids !== undefined) {
          return Promise.all(post.kids.map((id) => fetchItem(id)))
            .then((items) => items.filter((item) => item.deleted !== true))
        }
        else {
          return []
        }
      })
      .then((comments) => this.setState({
        comments
      }))
      .catch((error) => {
        console.warn("Error: ", error)
        this.setState({
          error: "Failed to fetch :("
        })
      })
  }

  loading() {
    return this.state.post === null && this.state.error === null;
  }

  loadingComments() {
    return this.state.comments === null && this.state.error === null;
  }

  render() {
    const { post, comments, error } = this.state

    console.log(post)

    if (this.loading()) {
      return <Loading />
    }

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <React.Fragment>
            <PostPreview large post={post} />

            <div dangerouslySetInnerHTML={{__html: post.text}} />

            {this.loadingComments() ? <Loading text="Fetching comments" /> : null}

            {comments ? <CommentsList comments={comments} /> : null}

            {comments && comments.length === 0 ? <p className="center-text">This post has no comments</p> : null}

            {error ? <p className="center-text">{error}</p> : null}
          </React.Fragment>
        )}
      </ThemeConsumer>
    )
  }
}