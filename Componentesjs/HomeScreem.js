import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

import  Descripcion  from './Descripcion';
import  SplashScreen  from './SplashScreen';
import  Conexion  from './Conexion';
import  VistaBlue  from './VistaBlue';

const Stack= createNativeStackNavigator(); 


const HomeScreem = () =>{
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Descripcion'>

         <Stack.Screen name="Descripcion" component={Descripcion} options={{ headerMode: 'none', headerShown: false }}/>
         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerMode: 'none',headerShown: false }}/>
         <Stack.Screen name="Conexion" component={Conexion} options={{ headerMode: 'none',headerShown: false }}/>
         <Stack.Screen name="VistaBlue" component={VistaBlue} options={{ headerMode: 'none',headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreem;