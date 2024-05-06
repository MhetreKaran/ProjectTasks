import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {employee} from '../store/UserSlice';

const Employee = () => {
  const employeeList = useSelector(state => state.userReducer?.employee);

  console.log('employee list', employeeList);
  return (
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '900',
          marginVertical: 20,
        }}>
        Show Employee List
      </Text>
      {Array.isArray(employeeList) &&
        employeeList.length > 0 &&
        employeeList.map(emp => {
          return (
            <>
              {emp && (
                <View style={{width: '70%'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {emp?.fname && (
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '900',
                          color: 'black',
                          textAlign: 'center',
                        }}>
                        {`${emp?.fname} ${emp.lname}`}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {emp?.age && (
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                        }}>
                        {`Age: ${emp?.age}`}
                      </Text>
                    )}
                    <View style={{flexDirection: 'row', marginRight: 4}}>
                      {emp?.address && (
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'center',
                          }}>
                          {emp?.address},
                        </Text>
                      )}
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: 'black',
                          textAlign: 'center',
                        }}>
                        {emp?.city}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </>
          );
        })}
    </View>
  );
};

export default Employee;
