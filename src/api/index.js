import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.slingacademy.com/v1/sample-data'
})

export default api;