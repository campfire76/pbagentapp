import React, {useState} from 'react';
import Header from './Components/Header';
import WelcomeMsg from './Components/WelcomeMsg';
import TextBox from './Components/TextBox';
import ContBtn from './Components/ContBtn';
import ExtraMsg from './Components/ExtraMsg';
import { View, StyleSheet, KeyboardAvoidingView, } from 'react-native';

export default function StartScreen ({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // console.log(!(username && password))
    // console.log(username)
    
    return(
        <View style={styles.container}>
                        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "position"}>
            <Header />

                <WelcomeMsg name='Welcome to Policybazaar' />
                <TextBox name='Employee ID' 
                            onChangeText={setUsername} 
                            value={username}/>
                <TextBox name='Password' 
                            keyboardType='numeric' 
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}/>
                <ContBtn
                         onPress={() => navigation.navigate('HomeScreen')} 
                         disabled = {!(username && password)}/>
                </KeyboardAvoidingView>           
            <ExtraMsg name='By continuing, you agree with our privacy policy.' />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fff' ,
        flex : 1,
    },
})
