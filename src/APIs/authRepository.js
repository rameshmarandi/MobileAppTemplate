import {UATRepository} from './Repository';

const singup = "signupWithPassword"
const generateOTP = "GenerateOTP"
const logIn = "loginWithPassword"
const getCurrentUser="/api/auth/getUser"
const forgotPassword = "forgotPassword"
export default { 
  Registration(payload) {
    return UATRepository.post(transformRoute(singup), payload);
  },
  generateOTP(payload) {
    return UATRepository.post(transformRoute(generateOTP), payload);
  },
  logIn(payload) {
    return UATRepository.post(transformRoute(logIn), payload);
  },
  currentUser(payload) {
    return UATRepository.get(`${getCurrentUser}`, payload);
  },
  forgotPassword(payload) {
    return UATRepository.post(transformRoute(forgotPassword), payload);
  },
  
};

const transformRoute = (route) => {
  return `/api/auth/${route}`;
};
