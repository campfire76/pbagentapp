import React from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import{
  useFonts,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function ContBtn(props){
    let [fontsLoaded] = useFonts({Roboto_500Medium})


    const bgColor = {
        backgroundColor : (props.disabled) ? '#F2F7FF': '#2865FF',

    }
    const txtColor = {
        color : (props.disabled) ? '#172B4D': '#FFFFFF',
        opacity : (props.disabled) ? 0.3 : 1,
    }

    if(!fontsLoaded){
        return <AppLoading />
    }
    else{
        return( <View style={styles.container}>
                    <Pressable style={[styles.buttonStyle, bgColor]} {...props}>
                        <Text style={[styles.textStyle, txtColor]}>Continue</Text>
                    </Pressable>
                     
                </View>
         );
    }
    
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        marginVertical: 30,
        marginHorizontal: 16,

    },
    buttonStyle: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        
        
    },
    textStyle: {
        
        
       fontFamily: 'Roboto_500Medium',
        fontSize: 14,
    },
})

