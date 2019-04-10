import React, { Component } from 'react';

const Input = ({ type, name, placeholder, change, postValue }) => {
  // state = {
  //   data: {
  //     email: '',
  //     password: '',
  //   },
  //   errors: {},
  //   user: {},
  // };

  // render() {
  // const  = this.props;
  return (
    <div className="form-group">
      <label htmlFor={name} />
      <input
        type={type}
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
        onChange={change}
        value={postValue}
      />
    </div>
  );
};
// }

export default Input;
