import jwtDecode from 'jwt-decode';
import axios from 'axios';

const setJwt = () => {
  axios.defaults.headers.common['x-auth-token'] = 'token';
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
};

const signinHandler = async (email, password) => {
  const { data: jwt } = await axios.post('http://localhost:3005/api/users/login', {
    email,
    password,
  });
  localStorage.setItem('token', jwt);
};

const loginWithJwt = jwt => {
  localStorage.setItem('token', jwt);
};

const logoutHandler = async () => {
  await localStorage.removeItem('token');
};

const getJwt = () => {
  setJwt();
};

const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};

export default {
  signinHandler,
  getCurrentUser,
  logoutHandler,
  loginWithJwt,
  getJwt,
};
