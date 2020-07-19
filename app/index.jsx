import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './components/Top';
import New from './components/New';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { fetchTopPosts } from './utils/api'

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    fetchTopPosts().then((posts) => console.log(posts))
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Top} />
          <Route path="/new" component={New} />
        </div>
      </Router>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
