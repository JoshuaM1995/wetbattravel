import axios, {AxiosPromise} from 'axios';
import getRequestBody from "./request";
import {ApiMethod} from "./enums";

function apiRequest<Response = any>(
  url: string,
  method: ApiMethod = ApiMethod.GET,
  body?: Response,
): AxiosPromise<Response> {
  const requestOptions = getRequestBody(method, body);
  return axios(url, requestOptions);
}

export default apiRequest;
