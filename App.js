import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import SplashScreen from './Componentesjs/SplashScreen';
import HomeScreem from './Componentesjs/HomeScreem';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setIsShowSplash(false);
  },3000);
});

  return (
    <>
   {isShowSplash ?(
    <SplashScreen/>
   ):(
    <HomeScreem/>
   )}
    </>         
  );
}

