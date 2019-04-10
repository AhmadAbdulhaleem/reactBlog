import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../common/Input';
import { getPost, editPost } from '../../helpers/post';
import jwtDecode from 'jwt-decode';

class EditPost extends Component {
  state = {
    post: { title: '', content: '', imageUrl: '' },
    token: null,
  };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    const token = localStorage.getItem('token');

    const data = await getPost(postId, token);
    this.setState({ token, post: data });
  }

  handleChange = ({ currentTarget: input }) => {
    const postData = { ...this.state.post };
    postData[input.name] = input.value;
    this.setState({ post: postData });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { post } = this.state;
    const postId = post._id;

    try {
      const body = {
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl,
        creator: jwtDecode(this.state.token),
      };
      const resp = await editPost(postId, this.state.token, body);
      this.props.history.push('/posts');
      console.log(resp);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    const { post } = this.state;
    return (
      <div className="container">
        <Link to="/posts" className="btn btn-success mt-4 float-right">
          All Posts
        </Link>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            change={this.handleChange}
            postValue={post.title}
          />
          <Input
            type="text"
            name="content"
            placeholder="Content"
            change={this.handleChange}
            postValue={post.content}
          />
          <Input
            type="text"
            name="imageUrl"
            placeholder="imageUrl"
            change={this.handleChange}
            postValue={post.imageUrl}
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditPost;
