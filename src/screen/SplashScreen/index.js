import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>

<Image
        source={require('../../../assets/images/logo-MASO.png')}
        style={styles.logo}
      />

      <Text style={styles.text}>Maso Moveis Planejados</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000080',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logo: {
      width: 200, 
      height: 200, 
      resizeMode: 'contain', 
    },
  
    text: {
      color: '#fff',
      marginTop: 5,
      fontSize: 20,
      fontWeight:'bold',
    },
  });
  