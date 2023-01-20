import {combineReducers} from "@reduxjs/toolkit";
import { authSlice } from "./authStore";
import { usersSlice } from "./usersStore";

export const reducers = {
  auth: authSlice.reducer,
  user: usersSlice.reducer
}