import {createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "..";
import AuthApiService from "../../service/AuthApiService";
import {authSlice} from "./auth.slice";

export interface LoginProps {
  id?: string;
  password?: string;
}

const { actions } = authSlice;

export const effLogin = createAsyncThunk<
  void,
  LoginProps,
  { state: RootState }
>(
  'auth/effLogin',
  async (payload, api) => {
    const { id, password } = payload;
    try {
      const response = await AuthApiService.login(id, password);
      if (response.data) {
        api.dispatch(actions.actSuccessLogin());
      }else {
        api.dispatch(actions.actFailLogin());
      }
    }catch (error) {
      return api.rejectWithValue(error);
    }
  }
)