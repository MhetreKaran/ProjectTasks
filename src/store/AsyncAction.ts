import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Alert } from 'react-native';

export const userLogin = createAsyncThunk('userLogin', async data => {
  try {
    console.log('api', data);

    const user = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await user.json();
    console.log('result', result);
    if (result.token) {
      AsyncStorage.setItem("Token",JSON.stringify(result.token));
      AsyncStorage.setItem("isLoggedIn",JSON.stringify(true));
      Alert.alert("Logged In Successful");
      data.navigation.navigate('Home');
    }
    if(result.error){
      Alert.alert(result.error);
    }
    const newResult={
      result,
      username:data.username
    }
    return newResult;
  } catch (error) {
    console.log(error);
  }
});
