import { createAsyncThunk } from '@reduxjs/toolkit';
import { entryPoint } from '../axios';
import { OptionsDefault } from '../model.interface';
import { getErrorMessage } from '../utils/utils';
import { PostsResponse } from './posts.interface';

export const getPosts = createAsyncThunk<PostsResponse, string, OptionsDefault>(
  'getPosts',
  async (payload, thunkApi) => {
    try {
      const response = await entryPoint.get(payload ?? 'posts');
      return response;
    } catch (error) {
      const message = getErrorMessage(error);

      return thunkApi.rejectWithValue(message);
    }
  },
);
