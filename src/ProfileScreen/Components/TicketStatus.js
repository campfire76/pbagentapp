import React from 'react';
import {Text, View, StyleSheet, Image, Pressable, FlatList} from 'react-native';
import { useFonts,
         Merriweather_700Bold} from '@expo-google-fonts/merriweather';  
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';   
import {AntDesign, FontAwesome} from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';  
import { useNavigation } from '@react-navigation/native';

export default TicketStatus = (props) => {
    const renderCard = ({item}) => {
        console.log(item);
        if(item.status === 0){
            return(
                <View />
            );
        }
        else{
            return(
                <View>
                </View>
            );
        }

    }

    return (
        <View>
            <FlatList
                data = {props.data}
                renderItem = {renderCard}
                keyExtractor = {(item) => item.tid}
            />
        </View>
    );
}