import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Logout from './components/logout';
import PostForm from './components/posts/postForm';
import Posts from './components/posts/posts.js';
import PostDetails from './components/posts/postDetails';
import EditPost from './components/posts/editPost';
import DeletePost from './components/posts/deletePost';
import auth from './helpers/auth.js';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = auth.getCurrentUser();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Navbar userData={this.state.data} />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/posts" component={Posts} />
          <Route path="/post/new" component={PostForm} />
          <Route path="/post/details/:id" component={PostDetails} />
          <Route path="/post/edit/:id" component={EditPost} />
          <Route path="/post/delete/:id" component={DeletePost} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
