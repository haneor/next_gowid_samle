import axios, { AxiosRequestConfig, AxiosInstance, CancelTokenSource, AxiosResponse} from 'axios';
import * as Querystring from 'querystring';
import ApiError, {ApiErrorType} from './ApiError';
import Languages from "../model/constant/Languages";
import {getAuthToken, getUserId, removeAuthToken, setAuthToken} from "../utils/auth/authToken";
import NoAuthTokenApiError from "./NoAuthTokenApiError";

const BASE_URL = 'http://localhost:3000';

export interface ApiRequestConfig extends AxiosRequestConfig {
  isAuthRequired?: boolean;
  isCurrencyRequired?: boolean;
}

export default class ApiService {
  client: AxiosInstance;
  baseUrl: any;
  response: any;
  static cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: `${BASE_URL}${baseUrl}`,
      // timeout: 2000,
      // withCredentials: true,
      paramsSerializer: function (params) {
        return Querystring.stringify(params);
      },
    });
    this.client.interceptors.response.use(
      response => {
        ApiService.updateAuthToken(response);
        /* api 호출 시 결과 값이 null 일경우를 감지 합니다. */
        // if (ApiService.isTreatedAsNotFoundError(response)) {
        //   return Promise.reject(ApiError.createNotFoundError());
        // }
        return response;
      },
      error => {
        const apiError = new ApiError(error);
        // 로그인 되어 있는 상태에서 유효하지 않은 인증 토큰 삭제
        if (apiError.type === ApiErrorType.UNAUTHORIZED_INVALID_TOKEN && !!getUserId()) {
          removeAuthToken();
        }
        return Promise.reject(new ApiError(error));
      },
    );
  }


  static updateAuthToken(response: AxiosResponse<any>) {
    if (response.headers['X-AUTH-TOKEN']) {
      setAuthToken(response.headers['X-AUTH-TOKEN']);
    }
  }

  static isTreatedAsNotFoundError(response: AxiosResponse<any>) {
    return response.status === 200 && response.config?.method === 'get' && response.data.data === null;
  }

  addAuthHeader(config: ApiRequestConfig = {}) {
    const authToken = getAuthToken();
    const { isAuthRequired, ...axiosConfig } = config;
    if (isAuthRequired && !authToken) {
      // 인증이 반드시 필요한 API이지만 인증 토큰이 없는 경우 서버에 요청을 날리지 않고 바로 401 에러를 발생시킴
      throw new NoAuthTokenApiError();
    }

    return {
      ...axiosConfig,
      // cancelToken: ApiService.cancelTokenSource.token,
      headers: {
        ...(isAuthRequired === undefined && authToken ? { 'X-AUTH-TOKEN': authToken } : {}),
        ...({ 'Accept-Language': Languages.KO }),
        ...(config.headers || {}),
      },
    };
  }

  async get<T = any>(url: string, config?: ApiRequestConfig) {
    const result = await this.client.get<T>(url, this.addAuthHeader(config));
    return result.data;
  }

  async put<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.put<T>(url, data, this.addAuthHeader(config));
    return result.data;
  }

  async post<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.post<T>(url, data, this.addAuthHeader(config));
    return result.data;
  }

  async delete(url: string, config?: ApiRequestConfig) {
    const result = await this.client.delete(url, this.addAuthHeader(config));
    return result.data;
  }

  /* 웹 빌드 시 발생 하는 api 호출을 멈추기 위한 설정입니다. */
  static cancel() {
    ApiService.cancelTokenSource.cancel('Request cancelled');
    ApiService.cancelTokenSource = axios.CancelToken.source();
  }
}
