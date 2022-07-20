import {
  createSwitchNavigator,
  createAppContainer,
  StackActions,
} from 'react-navigation';

import Auth from './auth';
import Home from './home';

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth,
      Home,      
    },
    {
      initialRouteName: 'Auth',
      // initialRouteName: 'Home',
    },
  ),
);

export const popToTop = StackActions.popToTop();
