import axios from 'axios';

const URL = 'http://localhost:3005/api/posts';

export async function createPost(body, authToken) {
  const { data } = await axios(URL, {
    method: 'POST',

    headers: {
      'x-auth-token': authToken,
      // 'content-type': 'multipart/form-data',
      'content-type': 'application/json',
    },
    data: body,
  });

  return data;
}

export async function getPosts(authToken) {
  const { data } = await axios(URL, {
    method: 'GET',
    headers: {
      'x-auth-token': authToken,
      'content-type': 'application/json',
    },
  });

  return data;
}

export async function getPost(postId, authToken) {
  const { data } = await axios(`http://localhost:3005/api/posts/${postId}`, {
    method: 'GET',
    headers: {
      'x-auth-token': authToken,
      'content-type': 'application/json',
    },
  });

  return data;
}

export async function editPost(postId, authToken, body) {
  const { data } = await axios(`http://localhost:3005/api/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'x-auth-token': authToken,
      'content-type': 'application/json',
    },
    data: body,
  });

  return data;
}

export async function deletePost(postId, authToken) {
  const { data } = await axios(`http://localhost:3005/api/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'x-auth-token': authToken,
      'content-type': 'application/json',
    },
  });

  return data;
}
