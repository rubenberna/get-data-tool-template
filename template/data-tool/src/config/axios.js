import axios from 'axios'
import LocalStorageUtil from '../utils/localstorage.util';
import { login } from '../utils/security.util';

export const client = axios.create({
  baseURL: 'http://localhost:3000/api' // TODO: change baseUrl
})

export const setAuthInterceptors = () => {
  client.interceptors.request.use(async (config) => {
    const token = LocalStorageUtil.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  client.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      console.log('error')
      const originalRequest = error.config;
      if (error.response && error.response.status === 401) {
        await login();
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + LocalStorageUtil.getAccessToken();
        originalRequest.headers['Authorization'] = 'Bearer ' + LocalStorageUtil.getAccessToken();
        return axios(originalRequest);
      }
      return Promise.reject(error);
    }
  )
}
