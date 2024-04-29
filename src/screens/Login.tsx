import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../store/AsyncAction';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });
  const token = useSelector(state => state.userReducer?.token);
  console.log(token);

  const dispatch = useDispatch();

  const loginForm = () => {
    try {
      if (username == '' && password == '') {
        setError({
          ...error,
          emailError: 'username can not empty',
          passwordError: 'password can not empty',
        });
      } else {
        const user = {
          username,
          password,
          navigation,
        };
        dispatch(userLogin(user));
      }
    } catch (error) {}
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
        placeholder="Username"
        onChangeText={e => setUsername(e)}
        value={username}
      />
      {error.emailError && (
        <Text style={{color: 'red'}}>{error.emailError}</Text>
      )}
      <TextInput
        style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
        placeholder="Password"
        onChangeText={e => setPassword(e)}
        value={password}
      />
      {error.passwordError && (
        <Text style={{color: 'red'}}>{error.passwordError}</Text>
      )}
        {token.error && <Text style={{color:'red'}}>{token.error}</Text>}
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
