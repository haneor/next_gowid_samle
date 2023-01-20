import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../index";

const selAuthState = (state: RootState) => state.auth;

export const selLoginInfo = createSelector(selAuthState, state => ({
  id: state.id,
  password: state.password
}));

export const selLoginLoading = createSelector(selAuthState, state => state.loading);

export const selSuccessLogin = createSelector(selAuthState, state => state.isSuccessLogin);