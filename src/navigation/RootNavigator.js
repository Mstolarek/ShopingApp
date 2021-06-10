import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import CreateListModalScreen from '../screens/CreateListModalScreen';
import {useSelector} from 'react-redux';
import {getIsLogedIn} from '../redux/modules/Auth/Auth.selectors';
const Stack = createStackNavigator();

const RootNavigator = () => {
  const isLogedIn = useSelector(getIsLogedIn);
  return (
    <Stack.Navigator mode="modal">
      {!isLogedIn && (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}
      {isLogedIn && (
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
      )}
      {isLogedIn && (
        <Stack.Screen
          name="CreateList"
          component={CreateListModalScreen}
          options={{headerShown: false}}
        />
      )}
      {!isLogedIn && (
        <Stack.Screen
          name="CreateAcc"
          component={CreateAccountScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
