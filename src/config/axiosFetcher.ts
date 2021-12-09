import axios, { AxiosRequestConfig } from 'axios';
import {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
} from 'config/axiosInterceptor';

const Axios = axios.create();

Axios.interceptors.request.use(requestInterceptor, requestInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);

const axiosFetcher = (url: string, config?: AxiosRequestConfig) =>
  Axios.get(url, config).then((res) => res.data);

export { Axios, axiosFetcher };
