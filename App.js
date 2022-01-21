import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import  StartScreen from "./src/StartScreen/StartScreen";
import HomeScreen from './src/HomeScreen/HomeScreen';
import ProfileScreen from './src/ProfileScreen/ProfileScreen';
import CustomerBooking from './src/CustomerBooking/CustomerBooking';
import ChatScreen from './src/ChatScreen/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' options={{headerShown : false}} component={StartScreen} />
        <Stack.Screen name='HomeScreen' options={{headerShown : false}} component={HomeScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} 
        options={{title: '',
                  headerBackImage: () => (<AntDesign name='leftsquare' color='green'/>),
                  headerShadowVisible: false}
                }/>
        <Stack.Screen name='CustomerBooking' component={CustomerBooking} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

