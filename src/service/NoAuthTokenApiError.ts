import ApiError, { ApiErrorType } from './ApiError';

export default class NoAuthTokenApiError extends ApiError {
  constructor() {
    super({ response: {
      data: { resultCode: ApiErrorType.UNAUTHORIZED_INVALID_TOKEN },
      status: 401,
    } });
  }
}
