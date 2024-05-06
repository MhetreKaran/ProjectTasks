import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import TabNavigation from './src/screens/TabNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import DrawerNavigation from './src/screens/DrawerNavigation';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Tabs" component={TabNavigation} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
