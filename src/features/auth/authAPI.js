import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from '../../APIs/RepositoryFactory';
import {RUPTOK_MG_IMAGEPATH} from '../config/constants';
import {store} from '../store';
import * as authAPI from "./index";
// login apis

export const forgotPasswordAPI = createAsyncThunk(
  'Auth/forgotPasswordAPI',
  async (payload, thunkAPI) => {
    try { 
      const response = await API.authRepository.forgotPassword(payload);
      console.tron.log("Current USer background", response)        
    } catch (error) {
      return null;
    }
  },
);
export const getUserAPI = createAsyncThunk(
  'Auth/getCurrentUserAPI',
  async (payload, thunkAPI) => {
    try { 
      const response = await API.authRepository.currentUser(payload);
      console.tron.log("Current USer background", response)        
    } catch (error) {
      return null;
    }
  },
);
export const LoginAPI = createAsyncThunk(
  'Auth/LoginAPI',
  async (payload, thunkAPI) => {
    try { 
      const response = await API.authRepository.logIn(payload); 
      console.tron.log("Login Data", response);    
      if(response.data?.code==200)
      {     
        thunkAPI.dispatch(authAPI.token(response.data?.data.token));
      return response.data?.status
      }   
    } catch (error) {
      return null;
    }
  },
);
export const RegistrationAPI = createAsyncThunk(
  'Auth/RegistrationAPI',
  async (payload, thunkAPI) => {
    try { 
      const response = await API.authRepository.Registration(payload);
      console.tron.log("REs at baencd", response)
      if(response.data?.code==200){        
          thunkAPI.dispatch(authAPI.coreUserDetails(response.data?.data.user));
       return response.data?.status
      }   
    } catch (error) {
      return null;
    }
  },
);
export const generateOtpAPI = createAsyncThunk(
  'Auth/generateOTPAPI',
  async (payload, thunkAPI) => {
    const {mobile} = payload;
    try { 
      const payload = {
        mobile : mobile,
        type:"Register"
      }
      const response = await API.authRepository.generateOTP(payload);
      if(response.data.code==200){
        return response.data.data
      }
     console.tron.log("Generate otp response", response)
    } catch (error) {
      return null;
    }
  },
);

//Session Details
export const setUserSession = async (props) => {
  try {
    await AsyncStorage.setItem('session', props.toString());
  } catch (erro) {
    console.tron.log('Something want wrong on session');
    await AsyncStorage.setItem('session', props);
  }
};

export const getUserSession = async () => {
  try {
    let loggedIn = await AsyncStorage.getItem('session');
    if (typeof loggedIn == 'string') {
      loggedIn = loggedIn == 'true';
    }
    return loggedIn;
  } catch (erro) {
    console.tron.log('Something want wrong on session');
    return false;
  }
};
