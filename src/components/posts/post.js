import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './post.css';

class Post extends Component {
  state = {};

  render() {
    const { post } = this.props;
    return (
      <div className="col-4 mb-4" key={post._id}>
        <div className="card">
          <img className="card-img-top" src={post.imageUrl} alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <Link to={`/post/details/${post._id}`} className="btn btn-primary btn-sm">
              Show Details
            </Link>
            <Link to={`/post/edit/${post._id}`} className="btn btn-warning btn-sm ml-2">
              Edit Post
            </Link>
            <Link to={`/post/delete/${post._id}`} className="btn btn-danger btn-sm mt-1">
              Delete Post
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
