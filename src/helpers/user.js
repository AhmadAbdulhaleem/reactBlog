import axios from 'axios';

const register = async user => {
  const { data } = await axios.post('http://localhost:3005/api/users/signup', {
    email: user.email,
    password: user.password,
    name: user.name,
  });
  return data;
};

export default {
  register,
};
