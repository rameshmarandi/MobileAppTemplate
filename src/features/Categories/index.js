import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    allcategories : null,
    subcategories: null
 
};

const AuthSlice = createSlice({ 
    name: "Auth", 
  initialState,
  reducers: {   
    allcategories: (state, { payload }) => {
      state.allcategories = payload;
    },
    subcategories: (state, { payload }) => {
      state.subcategories = payload;
    },
   
   
  },
  extraReducers: {},
});

export const { allcategories,subcategories} = AuthSlice.actions;

export default AuthSlice.reducer;
