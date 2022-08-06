import {
  createSwitchNavigator,
  createAppContainer,
  StackActions,
} from 'react-navigation'

import Auth from './auth'
import Home from './home'

export default getRootNavigator = (loggedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Auth,
        Home,
      },
      {
        initialRouteName: loggedIn ? 'Home' : 'Auth',
      },
    ),
  )
