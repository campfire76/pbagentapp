import React from 'react';
import { StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";

export default function WelcomeMsg(props) {
  let [fontsLoaded] = useFonts({
    Merriweather_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
  else{
    return <Text style={styles.header} {...props}>{props.name}</Text>
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 23,
    alignContent: 'center',
    marginBottom: 20,
    marginHorizontal: 16,
    fontFamily: 'Merriweather_700Bold',
    color: '#172b4d',
  },
})