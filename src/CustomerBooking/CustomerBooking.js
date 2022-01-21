import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen(){
    const navigation = useNavigation(); 
    return (<ScrollView>
        <Button title='Chat' onPress={() => navigation.navigate('ChatScreen')} />
    </ScrollView>
        );
}