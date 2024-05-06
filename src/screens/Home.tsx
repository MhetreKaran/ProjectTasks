import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addingEmployee} from '../store/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();
  // const userEmail = useSelector(state => state.userReducer?.userEmail);
  const dispath = useDispatch();
  const clearFormFeild = () => {
    setFname('');
    setLname('');
    setAge('');
    setAddress('');
    setCity('');
  };
  const addEmployee = () => {
    const employee = {
      fname,
      lname,
      age,
      address,
      city,
    };
    console.log(employee);
    dispath(addingEmployee(employee));
    Alert.alert('Employee added successfully');
    clearFormFeild();
  };
  const [userEmail, setUserEmail] = useState(false);
  const getData = async () => {
    const data = await AsyncStorage.getItem('username');
    console.log('async storage', data);
    setUserEmail(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 900}}>
          User Profile
        </Text>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 500}}>
          {userEmail}
        </Text>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem('Token');
            await AsyncStorage.removeItem('isLoggedIn');
            navigation.navigate("Login")
          }}
          style={{
            backgroundColor: 'orange',
            padding: 6,
            borderRadius: 8,
            marginTop: 8,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 900}}>
          Add Emplyee
        </Text>
        <TextInput
          style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
          placeholder="First Name"
          onChangeText={e => setFname(e)}
          value={fname}
        />
        <TextInput
          style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
          placeholder="Last Name"
          onChangeText={e => setLname(e)}
          value={lname}
        />
        <TextInput
          style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
          placeholder="Age"
          onChangeText={e => setAge(e)}
          value={age}
        />
        <TextInput
          style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
          placeholder="Addressline"
          onChangeText={e => setAddress(e)}
          value={address}
        />
        <TextInput
          style={{width: 200, borderBottomWidth: 1, borderRadius: 8}}
          placeholder="City"
          onChangeText={e => setCity(e)}
          value={city}
        />
        <TouchableOpacity
          onPress={addEmployee}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 4,
            marginTop: 16,
          }}>
          <Text style={{color: 'black'}}>Add Employee</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
