import { Component } from 'react';
import { deletePost } from '../../helpers/post';

class DeletePost extends Component {
  state = {
    data: {},
    token: null,
  };

  async componentDidMount() {
    const postId = this.props.match.params.id;
    const token = localStorage.getItem('token');

    const data = await deletePost(postId, token);
    this.setState({ token, data });
    this.props.history.push('/posts');
  }

  render() {
    return null;
  }
}

export default DeletePost;
