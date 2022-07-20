import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './src/navigation/init';
import {FormProvider} from './src/utility/form-context';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FormProvider>
          <Navigation />
        </FormProvider>
      </Provider>
    );
  }
}
