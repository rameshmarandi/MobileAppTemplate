import {createStackNavigator} from 'react-navigation-stack';
import AuthChangePassword from '../screens/Auth/AuthChangePassword';
import ForgotPassword from '../screens/Auth/ForgotPassword';

import Login from '../screens/Auth/Login';
import Registration from '../screens/Auth/Registration';

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
