import axios from 'axios';

async function getData(user_id) {
  const user_url = `https://jsonplaceholder.typicode.com/users/${user_id}`;
  const post_url = `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`;

  const { data: user_data } = await axios(user_url);
  const { data: post_data } = await axios(post_url);

  return { ...user_data, posts: post_data };
}

export default getData;