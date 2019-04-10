import { Component } from 'react';
import auth from '../helpers/auth';

class Logout extends Component {
  async componentDidMount() {
    await auth.logoutHandler();
    window.location = '/';
  }

  render() {
    return null;
  }
}

export default Logout;
