import React, { Component } from 'react';

import { Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const RouterWithRedux = connect()(Router);

import Login from './src/components/Login';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login" />
          </Stack>
        </RouterWithRedux>
      </Provider>
    );
  }
}
