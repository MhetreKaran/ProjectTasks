import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Settings from './Settings';
import Info from './Info';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='info' component={Info}/>
      <Drawer.Screen name='setting' component={Settings}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation