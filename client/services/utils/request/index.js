import axios from 'axios';
import _get from 'lodash/get';
import customError from 'custom-error';

/* eslint-disable no-undef */
const request = axios.create();

request.interceptors.response.use(undefined, (error) => {
  const InterceptorErrorResponse = customError('InterceptorErrorResponse');
  const err = {
    errMsg: _get(error, 'response.data.error.message', error.message),
    errCode: _get(error, 'response.status', 400),
  };
  const statusText = _get(error, 'response.statusText');

  InterceptorErrorResponse.prototype.errMsg = err.errMsg;
  InterceptorErrorResponse.prototype.errCode = err.errCode;

  throw InterceptorErrorResponse();
});

export default request;
