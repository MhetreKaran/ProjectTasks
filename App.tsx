import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import TabNavigation from './src/screens/TabNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getData = async () => {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log('async storage', data);
    setIsLoggedIn(data);
  };
  useEffect(() => {
    SplashScreen.hide();
    getData();
  }, []);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isLoggedIn && (
            <Stack.Screen
              name="Tabs"
              component={TabNavigation}
              options={{headerShown: false}}
            />
          )}
          {!isLoggedIn && <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
