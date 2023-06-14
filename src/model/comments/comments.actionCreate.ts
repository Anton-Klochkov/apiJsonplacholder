import { createAsyncThunk } from '@reduxjs/toolkit';
import { entryPoint } from '../axios';
import { OptionsDefault } from '../model.interface';
import { getErrorMessage } from '../utils/utils';
import { CommentResponse } from './comments.interface';

export const getCommentsById = createAsyncThunk<
  CommentResponse[],
  number,
  OptionsDefault
>('comments', async (payload, thunkApi) => {
  try {
    const response = await entryPoint.get(`comments?postId=${payload}`);
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);

    return thunkApi.rejectWithValue(message);
  }
});
