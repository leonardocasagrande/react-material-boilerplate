import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

function requestInterceptor(config: AxiosRequestConfig) {
  // console.info("Request Interceptor");
  // console.log(config);
  return config;
}

function requestInterceptorError(error: AxiosError) {
  return Promise.reject(error);
}

function responseInterceptor(response: AxiosResponse) {
  // console.info('Response Interceptor')
  // console.log(response)
  return response;
}

function responseInterceptorError(error: AxiosError) {
  return Promise.reject(error);
}

export {
  requestInterceptor,
  requestInterceptorError,
  responseInterceptor,
  responseInterceptorError,
};
