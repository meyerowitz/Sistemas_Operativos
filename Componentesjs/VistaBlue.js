import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet,Text,Button, ScrollView } from 'react-native';

{"import BluetoothSerial from 'react-native-bluetooth-serial-next'"}

export default function VistaBlue(props){

    return(
        <View style={styles.container}>
                    <View style={styles.button}>
                        <Text>VistaBlue</Text>
                    </View>
        </View>

    );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent:   
      'center',
         alignItems: 'center',
    },

    image: {
        position: 'absolute',
        flex: 1,
        width: '100%', 
        height: '100%', 
      },

      image2: {
        position: 'absolute',
        flex: 1,
        width: 80, 
        height: 80, 
        left: 140,
        top:60,
        bottom:0,
        right:0,
      },

      view2:{
        position: 'absolute',
        flex: 1,
        width: 290, 
        height: 420, 
        left: 40,
        top:180,
        bottom:0,
        right:0,
        shadowColor: '#89CAB1',
        shadowOffset: {
          width: 3,
          height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 0.84,
        elevation: 5,
          borderRadius: 15, // Para una sombra más redondeada
         
      },

      button:{
        borderRadius: 20,
      },
      view1:{
        flex: 1,
        position: 'absolute',
        width: 280, 
        height: 390, 
      },      

      text:{
        padding:  20,
        fontSize: 15, lineHeight: 22, letterSpacing: 2,
         textAlign: 'justify',
      },

  });