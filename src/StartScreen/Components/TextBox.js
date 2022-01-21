import React, {useState} from 'react';
import  {View, Text, StyleSheet, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import{
  useFonts,
  Roboto_400Regular
} from "@expo-google-fonts/roboto";

const TextBox = (props) => {

    let [fontsLoaded] = useFonts({
      Roboto_400Regular
    });

    const [isFocused, setIsFocused] = useState(false);
    onFocusChange = () => {
        setIsFocused(true)
    }
    onBlurChange = () => {
      setIsFocused(false)
  }

  if(!fontsLoaded){
    return (<AppLoading />)
  }
  else{
    return (
        <TextInput
        {...props}
          onFocus={onFocusChange}
          onBlur={onBlurChange}
          style={isFocused ? styles.input : styles.inputNone}
          placeholder={props.name}
        />
    );
  }
}
  
  const styles = StyleSheet.create({
    inputNone: {
      height: 56,
      marginVertical : 20,
      borderWidth: 1,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 8,
      borderColor: '#5e6c84',
      color: '#253858',
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
    },
    input: {
      height: 56,
      marginVertical : 20,
      borderWidth: 1,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 8,
      borderColor : '#0065ff',
      color: '#253858',
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
    },
  });
  
  export default TextBox;