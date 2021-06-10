import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Tabs = createBottomTabNavigator();
Fontisto.loadFont();
const RenderIcon = (iconname) => () =>
  <Fontisto name={iconname} size={30} color={'chocolate'} />;

const HomeNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: RenderIcon('home'),
        }}
      />
      <Tabs.Screen
        name="History"
        component={HistoryScreen}
        options={{tabBarIcon: RenderIcon('nav-icon')}}
      />
    </Tabs.Navigator>
  );
};

export default HomeNavigator;
