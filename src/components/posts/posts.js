import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../helpers/post';
import Post from './post.js';

class Posts extends Component {
  state = {
    data: [],
    token: null,
  };

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const data = await getPosts(token);
    this.setState({ data, token });
  }

  render() {
    return (
      <div className="container mt-4">
        <Link to="/post/new" className="btn btn-secondary mb-4 float-right">
          Add new Post
        </Link>
        <div className="row">
          {this.state.data.map(post => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
