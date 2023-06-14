import { getPosts } from './posts.actionCreate';
import { createSlice } from '@reduxjs/toolkit';
import { PostsSlice, SelectPostPayload } from './posts.interface';

const initialState: PostsSlice = {
  data: [],
  selectPost: null,
  loading: false,
  error: undefined,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    selectPost: (state, { payload }: SelectPostPayload) => {
      state.selectPost = payload;
    },
    clearSelectedPost: (state) => {
      state.selectPost = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.data = [];
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getPosts.rejected, (state, { payload }) => {
      state.data = [];
      state.error = payload;
      state.loading = false;
    });
  },
});

export const { selectPost, clearSelectedPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
