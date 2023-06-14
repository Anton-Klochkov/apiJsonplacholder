import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '../utils/utils';
import { entryPoint } from '../axios';
import { OptionsDefault } from '../model.interface';
import { UserResponse, UsersData } from './users.interface';

export const getUsers = createAsyncThunk<UsersData, void, OptionsDefault>(
  'getUsers',
  async (_, thunkApi) => {
    try {
      const response = await entryPoint.get('users');

      return response;
    } catch (error) {
      const message = getErrorMessage(error);

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const getUserById = createAsyncThunk<
  UserResponse,
  number,
  OptionsDefault
>('user', async (payload, thunkApi) => {
  try {
    const response = await entryPoint.get(`users/${payload}`);
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);

    return thunkApi.rejectWithValue(message);
  }
});
