import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import Constants from 'expo-constants'
import LogIn from './src/components/LogIn';
import Routes from './src/index'
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffff" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}



