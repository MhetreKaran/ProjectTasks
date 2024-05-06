import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../store/AsyncAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);

  const dispatch = useDispatch();
  const handleEmail = (e: any) => {
    let emailVar = e.nativeEvent.text;
    setUsername(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setUsername(emailVar);
      setEmailVerify(true);
    }
  };
  const handlePassword = (e: any) => {
    let passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getData = async () => {
    const data = await AsyncStorage.getItem('isLoggedIn');//eve.holt@reqres.in
    setIsLoggedIn(data);
  };
useEffect(()=>{
  getData();
  if(isLoggedIn){
    navigation.navigate("Tabs")
  }
},[isLoggedIn])
  const loginForm = () => {
    try {
      const user = {
        username,
        password,
        navigation
      };
      if (emailVerify && passwordVerify) {
        dispatch(userLogin(user));
      }
    } catch (error) {}
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
        placeholder="Username"
        onChange={e => handleEmail(e)}
      />
      {username.length < 1 ? null : emailVerify ? null : (
        <Text style={{color: 'red'}}>Enter proper email address</Text>
      )}
      <TextInput
        style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
        placeholder="Password"
        onChange={e => handlePassword(e)}
      />
      {password.length < 1 ? null : passwordVerify ? null : (
        <Text style={{color: 'red'}}>
          Uppercase, Lowercase, Number and 6 or more characters
        </Text>
      )}
      <TouchableOpacity
        onPress={loginForm}
        style={{
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 4,
          marginTop: 16,
        }}>
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
