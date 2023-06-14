import { commentsReducer } from './../model/comments/comments.slice';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer, usersReducer } from '../model';

export const store = configureStore({
  reducer: {
    postsReducer,
    usersReducer,
    commentsReducer,
  },
});
