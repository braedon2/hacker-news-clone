import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Top from './components/Top';
// import New from './components/New';
import Nav from './components/Nav';
// import User from './components/User';
// import Post from './components/Post';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
import Loading from './components/Loading';

const Posts = React.lazy(() => import('./components/Posts'))
const User = React.lazy(() => import('./components/User'));
const Post = React.lazy(() => import('./components/Post'));

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState({
        theme: this.state.theme === 'light' ? 'dark' : 'light'
      })
    }
  }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              
              <React.Suspense fallback={<Loading /> }>
                <Route exact path="/" render={() => <Posts type="top" />} />
                <Route path="/new" render={() => <Posts type="new" />} />
                <Route path="/user" component={User} />
                <Route path="/post" component={Post} />
              </React.Suspense>
              
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
