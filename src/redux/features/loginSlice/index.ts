import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './helper';
import { Login } from './apiActions';

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
        state.success = payload.success;
      })
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.rejected, (state, { payload }) => {
        if (payload) {
          state.loading = false;
          state.message = payload.message;
          state.success = payload.success;
        }
      });
  }
});
