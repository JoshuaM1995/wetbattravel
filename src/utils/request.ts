import {AxiosRequestConfig, CancelToken} from 'axios';
import {ApiMethod} from './enums';

export default function getRequestBody<Response = any>(
  method: ApiMethod,
  body?: Response,
  cancelToken?: CancelToken,
) {
  let requestOptions: AxiosRequestConfig = {
    baseURL: 'http://localhost:4000/api',
    method,
    cancelToken,
  };

  if(method === ApiMethod.POST) {
    if(body) {
      requestOptions.data = body;
    }

    requestOptions.data = { ...requestOptions.data }
  } else {
    if(body) {
      requestOptions.params = body;
    }

    requestOptions.params = { ...requestOptions.params }
  }

  return requestOptions;
}
