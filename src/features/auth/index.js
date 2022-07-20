import {createSlice} from '@reduxjs/toolkit';

import * as AuthAPIs from './authAPI';

const initialState = {
  user: {Details: {}},
  BusinessDetails: {Details: {}},
  AiabProductDetails: {Details: {}},
  OTPDetails: {Details: {}},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = AuthSlice.actions;

export default AuthSlice.reducer;
