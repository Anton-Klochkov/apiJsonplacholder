import { createSlice } from '@reduxjs/toolkit';
import { CommentsSlice } from './comments.interface';
import { getCommentsById } from './comments.actionCreate';

const initialState: CommentsSlice = {
  comments: [],
  loading: false,
  error: undefined,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsById.pending, (state) => {
      state.comments = [];
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getCommentsById.fulfilled, (state, { payload }) => {
      state.comments = payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getCommentsById.rejected, (state, { payload }) => {
      state.comments = [];
      state.error = payload;
      state.loading = false;
    });
  },
});

export const commentsReducer = commentSlice.reducer;
