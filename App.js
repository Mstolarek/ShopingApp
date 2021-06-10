/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AuthManager from './src/managers/AuthManager';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <AuthManager />
    </Provider>
  );
};

export default App;
