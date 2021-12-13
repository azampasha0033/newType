/* eslint-disable curly */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Instance } from '../../../config/axios';

import { ILoginPayloadRtn, ILoginArg, ILoginRejectedPayload } from './types';

export const Login = createAsyncThunk<
  ILoginPayloadRtn,
  ILoginArg,
  {
    rejectValue: ILoginRejectedPayload;
  }
>('login/loginInfo', async (loginInfo: ILoginArg, thunkAPI) => {
  try {
    const response = await Instance.post<any>('user/login', loginInfo);
    if (response.status === 400) return thunkAPI.rejectWithValue(response.data);
    return { ...response.data };
  } catch (err: any) {
    const error: AxiosError<ILoginRejectedPayload> = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
