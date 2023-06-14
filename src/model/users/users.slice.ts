import { createSlice } from '@reduxjs/toolkit';
import { getUserById, getUsers } from './users.actionCreate';
import { UsersSlice } from './users.interface';
import { userDefault } from './users.constants';

const initialState: UsersSlice = {
  list: {
    getUsers: {
      users: [],
      loading: false,
      error: undefined,
    },
    getUsersById: {
      userById: userDefault,
      loading: false,
      error: undefined,
    },
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.list.getUsers.users = [];
      state.list.getUsers.loading = true;
      state.list.getUsers.error = undefined;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.list.getUsers.users = payload.data;
      state.list.getUsers.loading = false;
      state.list.getUsers.error = undefined;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.list.getUsers.users = [];
      state.list.getUsers.error = payload;
      state.list.getUsers.loading = false;
    });

    builder.addCase(getUserById.pending, (state) => {
      state.list.getUsersById.userById = userDefault;
      state.list.getUsersById.loading = true;
      state.list.getUsersById.error = undefined;
    });
    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
      state.list.getUsersById.userById = payload;
      state.list.getUsersById.loading = false;
      state.list.getUsersById.error = undefined;
    });
    builder.addCase(getUserById.rejected, (state, { payload }) => {
      state.list.getUsersById.userById = userDefault;
      state.list.getUsersById.loading = false;
      state.list.getUsersById.error = payload;
    });
  },
});

export const usersReducer = usersSlice.reducer;
