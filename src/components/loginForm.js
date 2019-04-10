import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../helpers/auth';
import Error from './Error';
import Input from './common/Input';

class Form extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
    user: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  doSubmit = async e => {
    e.preventDefault();

    const { data } = this.state;
    try {
      await auth.signinHandler(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors['username'] = ex.response.data;
        this.setState({ errors: errors || {} });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container mt-4" style={{ width: '40%' }}>
        <form className="form-signin" onSubmit={this.doSubmit}>
          <Input type="email" name="email" placeholder="Email address" change={this.handleChange} />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            change={this.handleChange}
          />

          {this.state.errors.length && <Error allErrors={this.state.errors} />}

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
