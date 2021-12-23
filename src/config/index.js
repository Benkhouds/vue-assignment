import axios from 'axios';

const apiRoutes = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiRoutes;
