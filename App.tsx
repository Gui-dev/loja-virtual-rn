import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { Anton_400Regular, useFonts } from '@expo-google-fonts/anton'

import { Routes } from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({Anton_400Regular})

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#222" translucent={ true }/>
      <Routes />
    </>
  )
}


