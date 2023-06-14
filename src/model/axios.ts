import axios from 'axios';

const url = process.env.REACT_APP_URL;

export const entryPoint = axios.create({
  baseURL: url,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});
