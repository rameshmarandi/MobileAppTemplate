import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import theme from './src/theme'
import getRootNavigator from './src/navigation/init';
import {FormProvider} from './src/utility/form-context';
import {PersistGate} from 'redux-persist/integration/react';
import * as AuthAPI from './src/features/auth/authAPI'
import {Image, Text, View, Platform} from 'react-native';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from './src//utility/responsive'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: true,
    };
  }
  async componentDidMount() {
    const loggedIn = await AuthAPI.getUserSession();
    this.setState({loggedIn, loading: false});
  }

  render() {
    if (this.state.loading) {
      return (
        <View
        style={{
          backgroundColor: '#000',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',

        }}>
        <Image
          source={require('./src/assets/img/upal.png')}
          style={{
            width: '55%',
            height: getResHeight(80),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: getFontSize(14),
            fontFamily: theme.font.latoBold,
            opacity: 0.5,
            textTransform: 'uppercase',
          }}>
          {/* UPAL MART */}
        </Text>
      </View>
      );
    }
    const Navigation = getRootNavigator(this.state.loggedIn);
    return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
        <FormProvider>
          <Navigation />
       
        </FormProvider>
        </PersistGate>
      </Provider>
    );
  }
}
