import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Blog
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-link nav-item" to="/">
            Home
          </NavLink>

          {!props.userData && (
            <React.Fragment>
              <NavLink className="nav-link nav-item" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link nav-item" to="/login">
                Login
              </NavLink>
            </React.Fragment>
          )}

          {props.userData && (
            <React.Fragment>
              <NavLink className="nav-link nav-item" to="/posts">
                Posts
              </NavLink>
              <NavLink className="nav-link nav-item ml-auto" to="/">
                {props.userData ? props.userData.username : ''}
              </NavLink>
              <NavLink className="nav-link nav-item ml-auto" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
