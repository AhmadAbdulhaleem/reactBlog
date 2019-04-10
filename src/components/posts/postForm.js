import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Input from '../common/Input';
import { createPost } from '../../helpers/post';
import jwtDecode from 'jwt-decode';

class PostForm extends Component {
  state = {
    data: { title: '', content: '', imageUrl: null },
    token: null,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.setState({ token });
  }

  handleChange = ({ currentTarget: input }) => {
    const postData = { ...this.state.data };

    if (input.name === 'title' || input.name === 'content') {
      postData[input.name] = input.value;
    } else if (input.name === 'imageUrl') {
      postData[input.name] = input.files[0];
      // console.log('ImageUrl', postData[input.name]);
    }

    this.setState({ data: postData });
  };

  // I will push it but not from this computer
  // I will push it from my laptop Because I have here another Github Account
  // Okey I Will do it okey thank you Jim ;)
  // Yes it has
  // ok

  handleSubmit = async e => {
    e.preventDefault();

    const { data } = this.state;

    const formData = new FormData();

    formData.append('image', data.imageUrl);
    formData.append('type', 'image');

    // console.log(data.imageUrl);

    try {
      const body = {
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl,
        creator: jwtDecode(this.state.token), // token
      };

      // console.log(body);

      const resp = await createPost(body, this.state.token);
      this.props.history.push('/posts');
      console.log(resp);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div className="container">
        <Link to="/posts" className="btn btn-success mt-4 float-right">
          All Posts
        </Link>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Input type="text" name="title" placeholder="Title" change={this.handleChange} />
          <Input type="text" name="content" placeholder="Content" change={this.handleChange} />
          <Input type="file" name="imageUrl" placeholder="imageUrl" change={this.handleChange} />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
