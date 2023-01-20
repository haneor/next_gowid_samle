export enum ApiErrorType {
  UNKNOWN = 0,

  BAD_REQUEST = 40000000,
  INVALID_PARAMETER = 40000001,
  MISSING_PARAMETER = 40000002,
  RESOURCE_NOT_FOUND = 40000200,
  UNAUTHORIZED = 40100000,
  UNAUTHORIZED_INVALID_EMAIL = 40100100,
  UNAUTHORIZED_INVALID_PW = 40100200,
  UNAUTHORIZED_INVALID_SESSION = 40100300,
  UNAUTHORIZED_INVALID_TOKEN = 40100500,
  UNAUTHORIZED_EXPIRED_TOKEN = 40100501,
  DISCARDED_TOKEN = 40100504,
  UNAUTHORIZED_PASSWORD_LOCK = 40100700,
  UNAUTHORIZED_LOCK = 40100800,
  FORBIDDEN =  40300000,
  NOT_FOUND = 40400000,
  EXCEPTION = 50000000,
  NOT_IMPLEMENTED = 50100000,
}

export default class ApiError extends Error {
  type: ApiErrorType = ApiErrorType.UNKNOWN;
  isNetworkError = false;
  isTimeout = false;
  isAuthError = false;
  isNotFound = false;
  is4xx = false;
  is5xx = false;
  status = -1;
  responseData = null;

  constructor(error?: any) {
    super(error?.response && error?.response?.data ? error?.response?.data?.message : error?.message);

    if (!error) return;
    if (error.code === 'ECONNABORTED') {
      this.isTimeout = true;
    }
    if (error.response) {
      if (error.response.data) {
        this.responseData = error.response.data;
        this.type = ApiErrorType[this.responseData.resultCode] ? this.responseData.resultCode : ApiErrorType.UNKNOWN;
      }
      if (error.response.status != null) {
        this.status = error.response.status;
        if (this.status === 404) {
          this.isNotFound = true;
        }
        if (this.status === 401 || this.status === 403) {
          this.isAuthError = true;
        }
        if (this.status >= 400 && this.status < 500) {
          this.is4xx = true;
        }
        if (this.status >= 500 && this.status < 600) {
          this.is5xx = true;
        }
        if (this.status === 404 || this.status === 204) {
          this.isNotFound = true;
        }
      }
    }
    if (error.message === 'Network Error') {
      this.isNetworkError = true;
    }
  }

  static createAuthorizationError() {
    const error = new ApiError();
    error.type = ApiErrorType.UNAUTHORIZED;
    error.isAuthError = true;
    error.is4xx = true;
    error.status = 401;
    return error;
  }

  static createNotFoundError() {
    const error = new ApiError();
    error.type = ApiErrorType.NOT_FOUND;
    error.isNotFound = true;
    error.is4xx = true;
    error.status = 404;
    return error;
  }
}