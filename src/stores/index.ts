import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducers} from "./reducers";

const reducer = combineReducers(reducers);

export const stores = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof stores.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof stores.dispatch;