import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import SettingScreen from './Screens/Settings'
import setKurssScreen from './Screens/setKurss'


const Stack = createStackNavigator();

export default function Screen() {
  return (
    <NavigationContainer initialRouteName = 'Hello'>
      <Stack.Navigator>
        <Stack.Screen name = "Hello" component={setKurssScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} style={{backgroundColor:'white'}} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
