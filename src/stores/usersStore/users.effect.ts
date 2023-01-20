import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "../index";
import UsersApiService from "../../service/UsersApiService";
import {usersSlice} from "./users.slice";
import {Simulate} from "react-dom/test-utils";

const { actions } = usersSlice;

export const effUsersList = createAsyncThunk<
  void,
  void,
  { state: RootState }
>(
  'users/effUsersList',
  async (_, api) => {
    try {
      const response = await UsersApiService.getUserList();
      if (response.result) {
        api.dispatch(actions.getUsersList(response.data));
      }
    }catch (error) {
      return api.rejectWithValue(error);
    }
  }
);

export const effUserDetail = createAsyncThunk<
  void,
  string,
  { state: RootState }
>(
  'users/effUserDetail',
  async (payload, api) => {
    const id = payload;
    try {
      const response = await UsersApiService.getUserDetail(id);
      if (response.result) {
        api.dispatch(actions.actGetUserDetail(response.data));
      }
    }catch (error) {
      return api.rejectWithValue(error);
    }
  }
)