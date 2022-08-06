import {createStackNavigator} from 'react-navigation-stack';
import AuthChangePassword from '../screens/auth/AuthChangePassword';
import ForgotPassword from '../screens/auth/ForgotPassword';

import Login from '../screens/auth/Login';
import Registration from '../screens/auth/Registration';

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      headerShown: false,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
  AuthChangePassword: {
    screen: AuthChangePassword,
    navigationOptions: {
      headerShown: false,
    },
  },
});
