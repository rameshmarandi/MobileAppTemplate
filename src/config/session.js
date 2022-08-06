import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateUserInfoAPI} from '../features/auth/authAPI';
import {store} from '../store';

export const setSession = async user => {
  await AsyncStorage.setItem('session', user ? 'applicant' : 'recruiter');
};

export const getSession = () => {
  if (store.getState().auth.braineduserinfo) {
    if (store.getState().auth.braineduserinfo.membershiptype == 'Applicant') {
      return true;
      // return store.getState().auth.braineduserinfo.membershiptype;
    } else {
      return false;
    }
  } else {
    return null;
  }
};

export const gettoken = () => {
  if (store.getState().auth.token) {
    return store.getState().auth.token;
  } else {
    return null;
  }
};
export const removeSession = async () => {
  const res = await store.dispatch(updateUserInfoAPI({firebasetoken: ''}));
  if (res.payload) {
    await store.dispatch({type: 'RESSET_STORE'});
  }
};
