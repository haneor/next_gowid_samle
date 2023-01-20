import {createSlice} from "@reduxjs/toolkit";
import {effLogin} from "./auth.effect";

interface AuthSate {
  loading: boolean;
  id?: string;
  password?: string;
  isSuccessLogin: boolean | null;
}

export function getInitAuthState() {
  const result: AuthSate = {
    loading: false,
    id: '',
    password: '',
    isSuccessLogin: null
  }
  return result;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: getInitAuthState(),
  reducers: {
    reset() {
      return getInitAuthState();
    },
    changeId(state, { payload }) {
      state.id = payload;
    },
    changePassword(state, { payload }) {
      state.password = payload;
    },
    actSuccessLogin(state) {
      state.isSuccessLogin = true;
    },
    actFailLogin(state) {
      state.isSuccessLogin = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(effLogin.pending, state => {
        state.loading = true;
      })
      .addCase(effLogin.rejected, state => {
        state.loading = false;
      })
      .addCase(effLogin.fulfilled, state => {
        state.loading = false;
      })
  }
});