import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../helpers/post';
import './post.css';

class PostDetails extends Component {
  state = { post: {}, token: null };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    const token = localStorage.getItem('token');
    const data = await getPost(postId, token);
    this.setState({ post: data, token });
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <main role="main" className="container mx-auto">
          <div className="starter-template">
            <h1>{post.title}</h1>
            <p className="lead">{post.content}</p>
            <img className="image" src={post.imageUrl} alt={post.title} />
            <Link to="/posts" className="btn btn-success mt-4 float-right">
              All Posts
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default PostDetails;
