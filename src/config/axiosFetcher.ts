import axios from 'axios';
import {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
} from 'config/axiosInterceptor';

const Axios = axios.create();

Axios.interceptors.request.use(requestInterceptor, requestInterceptorError);
Axios.interceptors.response.use(responseInterceptor, responseInterceptorError);

export { Axios };
