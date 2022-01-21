import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import{
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

const Item = ({myitem, counter}) => {

    //console.log(myitem)

    let [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium});
    const navigation = useNavigation();

    if(!fontsLoaded){
      return <AppLoading />
    }
    else{
      return(
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('ProfileScreen', {myitem})}>
          <View style={{flexDirection: 'row', alignItems:'center', height: 64}}>
            <View style={styles.numberStyle}>
              <Text style={styles.countStyle}>{counter}</Text>
            </View>
            
            <View style={styles.containerName}>
              <Text style={styles.descriptor}>Customer Name</Text>
              <Text style={styles.cardValueName}>{myitem.name}</Text>
            </View>
            
          </View>

        <View style={styles.extras__container}>
          <View style={styles.extras_ind}>
            <Text style={styles.descriptor}>Customer ID</Text>
            <Text style={styles.details}>{myitem.id}</Text>
          </View>
          
          <View style={styles.extras_ind}>
            <Text style={styles.descriptor}>Mobile Number</Text>
            <Text style={styles.details}>XXXX{myitem.mob[6]}{myitem.mob[7]}{myitem.mob[8]}{myitem.mob[9]}</Text>
          </View>

          <View style={styles.extras_ind}>
            <Text style={styles.descriptor}>Last Connected</Text>
            <Text style={styles.details}>{myitem.lastconn}</Text>
          </View>
        </View>
        </Pressable>
      </View>
      )
    }
  };


const styles = StyleSheet.create({
    container : {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        flex: 1,
        marginHorizontal : 16,
        marginBottom : 16 ,
        shadowOpacity : 0.5,
        shadowColor: 'black',
        shadowOffset : {width: 0, height : 1},
        shadowRadius: 10,
        elevation: 10,
        overflow: 'hidden',
    },

    extras__container: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#F2F7FF',
      height: 52, 
    },

    descriptor : {
        marginBottom : 3,
        fontSize: 10,
        color: '#253858',
        opacity: 0.5,
        fontFamily: 'Roboto_400Regular'
    },

    extras_ind: {
      flex: 1,
      marginHorizontal : 5,
    },

    cardValueName: {
      
      fontSize: 14,
      color: '#253858',
      opacity: 1,
      fontFamily: 'Roboto_500Medium'
    },

    details: {
      fontFamily: 'Roboto_400Regular',
      color: '#253858',
      fontSize: 14,
    },

    containerName: {
      
      flex: 1,
      marginHorizontal: 20,
    },
    
    numberStyle: {
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      height: 34,
      width: 34,
      backgroundColor: '#E5E8FF',
      margin:5,
      padding: 6,
      justifyContent: 'center',
    },

    countStyle : {
      color: '#6674DB',
      fontFamily: 'Roboto_400Regular',
      justifyContent: 'center',
    }
})

export default Item;