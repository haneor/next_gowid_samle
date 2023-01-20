import {createSlice} from "@reduxjs/toolkit";
import {effUserDetail, effUsersList} from "./users.effect";
import {UserInterface} from "../../model/constant/UserInterface";
import User from "../../model/User";

interface UserState {
  loading: boolean;
  list: UserInterface[];
  user: UserInterface | null;
}

export function getInitUserState() {
  const result: UserState = {
    loading: false,
    list: [],
    user: null
  }
  return result;
}

export const usersSlice = createSlice({
  name: 'user',
  initialState: getInitUserState(),
  reducers: {
    reset() {
      return getInitUserState();
    },
    getUsersList (state, { payload }) {
      state.list = payload.map(d => User.createFromApi(d));
    },
    actGetUserDetail(state, { payload }) {
      state.user = payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(effUsersList.pending, state => {
        state.loading = true;
      })
      .addCase(effUsersList.rejected, state => {
        state.loading = false;
      })
      .addCase(effUsersList.fulfilled, state => {
        state.loading = false;
      })
      .addCase(effUserDetail.pending, state => {
        state.loading = true;
      })
      .addCase(effUserDetail.rejected, state => {
        state.loading = false;
      })
      .addCase(effUserDetail.fulfilled, state => {
        state.loading = false;
      })
  }
})