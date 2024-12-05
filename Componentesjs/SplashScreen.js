import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Animated } from 'react-native';


const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Inicializa la animación en 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim]);

  return (
    
    <Animated.View  style={styles.container}>


      <StatusBar backgroundColor="#044122" barStyle="light-content" />
          {/*Degradado*/}
     <LinearGradient style={styles.fondo_background} colors={['#044122', '#021A1A']}>
          
          <Animated.View style={{
      ...styles.fadingContainer,
      opacity: fadeAnim,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
      height: '65%', 
      marginTop: -130,
    }}>
            <Image source={require("../assets/img/form.png")} style={styles.form} />
            <Image source={require("../assets/img/logo.png")} style={styles.logo} />
            <Image source={require("../assets/img/logo-text.png")} style={styles.logo_text} />

          </Animated.View>

          <Animated.View style={{       ...styles.fadingContainer,
      opacity: fadeAnim,
      width: '100%', 
      height: '80', 
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      }}>
                   <Text style={styles.haker_text}>For White Hat Hacking</Text>
                   <Image source={require("../assets/img/hacker.png")} style={styles.haker} />
        
          </Animated.View>
            
      </LinearGradient>
         
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    form_container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', 
      height: '65%', 
      marginTop: -130,
    },

    form: {
      width: '100%', 
      height: '100%', 
    },

    logo: {
      position: 'absolute',
      flex: 1,
      width: 219, 
      height: 135, 
      left: 70,
    },

    logo_text:{
      position: 'absolute',
      flex: 1,
      width: 170, 
      height: 65, 
      margin: 10,
      top:270,
      left: 80,
    },

    presentacion_conteiner:{
      width: '100%', 
      height: '80', 
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    haker_text:{
      position: 'absolute',
      flex: 1,
      margin: 10,
      left: 70,
      top:12,
      fontSize: 18, 
      color:"#50A68C", 
      fontFamily: 'Roboto',
      fontStyle: "italic",
    },

    haker:{
      position: 'absolute',
      flex: 1,
      width: 50, 
      height: 50, 
      margin: 10,
      left: 260,
    },
    

    fondo_background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', 
      height: '100%', 
     },


    image: {
        width: '100%', 
        height: '100%', 
        resizeMode:'contain'
      },

  });

export default SplashScreen;