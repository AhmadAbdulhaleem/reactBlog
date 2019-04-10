import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import user from '../helpers/user';
import auth from '../helpers/auth';
import Input from './common/Input';

class Form extends Component {
  state = {
    data: {
      email: '',
      password: '',
      name: '',
    },
    error: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  doSubmit = async e => {
    e.preventDefault();

    try {
      const response = await user.register(this.state.data);
      auth.loginWithJwt(response.token);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const error = { ...this.state.error };
        error['username'] = ex.response.data;
        this.setState({ error });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className="container mt-4" style={{ width: '40%' }}>
        <form className="form-signin" onSubmit={this.doSubmit}>
          <Input type="email" name="email" placeholder="Email" change={this.handleChange} />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            change={this.handleChange}
          />

          <Input type="text" name="name" placeholder="Name" change={this.handleChange} />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
