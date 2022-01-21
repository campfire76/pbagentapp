import React from 'react';
import {View, ScrollView, Button, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Profile from './Components/Profile';
import TicketStatus from './Components/TicketStatus'


export default function ProfileScreen({route}){
    const {myitem} = route.params;
    //console.log(myitem);
    const navigation = useNavigation(); 
    return (<View style={styles.container}>
        <Profile item={myitem}/>
        <TicketStatus data={myitem.tickets}/>

        {/* <ContactCard item={myitem}/> */}
    </View>
        );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
    },
})