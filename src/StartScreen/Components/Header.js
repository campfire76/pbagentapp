import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Header() {
  return <Image source={require('./assets/headimg.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 420,
    height: 500,
    top: -119,
    left: 0,
    marginBottom: -70,
  },
})