import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from '../../APIs/RepositoryFactory';
import {RUPTOK_MG_IMAGEPATH} from '../config/constants';
import {store} from '../store';
import * as categoriesAPI from "./index";


export const getAllCategoriesAPI = createAsyncThunk(
    'Auth/getAllCategoriesAPI',
    async (payload, thunkAPI) => {
      try { 
        const response = await API.categoriesRepository.getallCategories(payload);
         if(response.status == 200){
            thunkAPI.dispatch(categoriesAPI.allcategories(response?.data));
         }    
      } catch (error) {
        return null;
      }
    },
  );
export const getAllSubCategoriesAPI = createAsyncThunk(
    'Auth/getAllSubCategoriesAPI',
    async (payload, thunkAPI) => {
      try { 
        const response = await API.categoriesRepository.getAllSubCategories(payload);
       
        console.tron.log("SubCategores", response)
       
         if(response.status == 200){
            thunkAPI.dispatch(categoriesAPI.subcategories(response?.data));
         }    
      } catch (error) {
        return null;
      }
    },
  );