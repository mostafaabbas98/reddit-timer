import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.reddit.com/r/javascript.json?top&limit=100',
});
