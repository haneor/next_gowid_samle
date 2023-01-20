import {RootState} from "../index";
import {createSelector} from "@reduxjs/toolkit";

const selUserState = (state: RootState) => state.user;

export const selUsersList = createSelector(selUserState, state => state.list);

export const selUserLoading = createSelector(selUserState, state => state.loading);

export const selUserDetail = createSelector(selUserState, state => state.user);