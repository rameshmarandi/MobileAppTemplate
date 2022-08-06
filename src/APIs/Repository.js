
import axios from 'axios';
import {
HEADERS,
BASE_URL
} from '../config/constants';
import {gettoken} from '../config/session';


export const UATRepository = axios.create({
  baseURL : BASE_URL,
  headers: HEADERS
})
export const MGARepository = axios.create({
  baseURL : BASE_URL,
  headers: HEADERS
})

//-------------------------- Allegra Secure Repository ------------------------------------//

MGARepository.interceptors.request.use(
  async config => {
    const token = gettoken();
    if (token) {
      config.headers.authrization = `Bearer ${token}`;
    } else {
      delete MGARepository.defaults.authrization.common
        .authrization;
    }
    return config;
  },

  error => Promise.reject(error),
);