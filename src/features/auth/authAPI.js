import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// login apis

export const loginAPI = createAsyncThunk(
  'Auth/loginAPI',
  async (payload, thunkAPI) => {
    return {};
  },
);
