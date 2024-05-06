import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Employee from './Employee';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen
        name="Employee"
        component={Employee}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
