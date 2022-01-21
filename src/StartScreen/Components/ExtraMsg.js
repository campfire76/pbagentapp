import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ExtraMsg(props) {
  return(
      <View style={styles.container}><Text style={styles.header} {...props}>{props.name}</Text></View>
  ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'center',
    },
    header: {
        fontSize: 11,
        marginVertical: 10,
    },
})