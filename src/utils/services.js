import { get } from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export function callApi(endpoint, params = {}) {
  return get(`${API_URL}/${endpoint}`, { params: params });
}
