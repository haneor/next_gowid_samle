import ApiError, {ApiErrorType} from '../service/ApiError';
import {removeAuthToken, removeUserId} from "./auth/authToken";
import ApiService from "../service/ApiService";

const defaultErrorHandler = async (error, forceToLogin = true, message = '') => {
  if (error instanceof ApiError) {
    /*
      중복 로그인 허용으로 인한 로그아웃 시 에러 처리
     */
    if (error?.responseData.resultCode === ApiErrorType.DISCARDED_TOKEN) {
      await ApiService.cancel();
      await removeAuthToken();
      // await moveToLogin();
      await removeUserId();
      return;
    }

    if (error.isNetworkError || error.isTimeout) {
      // return moveToError();
    }
    if (error.status === 401) {
      await ApiService.cancel();
      await removeAuthToken();
      await removeUserId();
      return;
    }
    if (error.status === 404) {
      // return moveToError();
    }
  }
};

export default defaultErrorHandler;