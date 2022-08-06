import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  token : null,
  coreUser: {},
 
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {   
    coreUserDetails: (state, { payload }) => {
      state.coreUser = payload;
    },
    token: (state, { payload }) => {
      state.token = payload;
    },
   
  },
  extraReducers: {},
});

export const { coreUserDetails ,token} = AuthSlice.actions;

export default AuthSlice.reducer;
