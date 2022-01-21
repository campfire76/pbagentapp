import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import { useFonts,
         Merriweather_700Bold} from '@expo-google-fonts/merriweather';  
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';   
import {AntDesign, FontAwesome} from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';  
import { useNavigation } from '@react-navigation/native';

export default Profile = (props) => {

    //console.log(props.parentToChild);
    const navigation = useNavigation();
    [fontsLoaded] = useFonts({Merriweather_700Bold, Roboto_400Regular, Roboto_500Medium})
    if(!fontsLoaded){
        return <AppLoading />
    }
    else{
        return(
            <View style={styles.container}>

                <Text style={styles.name_it}>{props.item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.container__otherinfo}>
                        <FontAwesome name="phone" 
                        color='#5E6C84' 
                        size={20}
                        style={{margin:1}}/>
                        <Text style={styles.other_info}>
                            XXX XXX {props.item.mob[6]}{props.item.mob[7]}{props.item.mob[8]}{props.item.mob[9]}
                        </Text>
                    </View>
                    <View style={styles.container__otherinfo}>
                        <AntDesign name="right" 
                        color='#5E6C84' 
                        size={20} />
                        <Text style={styles.other_info}>{props.item.id}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    
                    <View style={styles.container__connect}>
                        <Image source={require('../Assets/videoIcon.png')} style={styles.icon} />
                        <Text style={styles.text__connect}>Video Call</Text>
                    </View>
                    

                    <Pressable style={styles.container__connect} onPress={() => navigation.navigate('ChatScreen')}>
                        <Image source={require('../Assets/chatIcon.png')} style={styles.icon}/>
                        <Text style={styles.text__connect}>Chat</Text>
                    </Pressable>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical : 22,
        backgroundColor: 'white',
    },
    container__otherinfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginHorizontal: 19.5,
        marginBottom: 23,

    },
    container__connect : {
        //for drop shadow
        backgroundColor: 'white',
        elevation: 8,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,

        //other styling vars
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginHorizontal: 8,
        color: '#3469CB',
        borderRadius: 8,
    },
    text__connect : {
        fontFamily: 'Roboto_500Medium',
        fontSize: 14,
        marginRight: 11,
    },
    name_it: {
        fontFamily: 'Merriweather_700Bold',
        fontSize: 24,
        color: '#253858',

    },
    other_info : {
        color: '#5E6C84',
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        marginLeft: 6,
    },

    icon : {
        marginRight: 12,
        height: 34,
        width: 34,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowRadius: 3,
    },
})