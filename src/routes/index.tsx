import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons'

import { Home } from './../screens/Home'
import { Details } from './../screens/Details'

export const Routes: React.FC = () => {

  const { Navigator, Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#222'
        }
      }}>
        <Screen 
          name="Home" 
          component={ Home }
          options={{
            headerShown: false
          }}
        />
        <Screen 
          name="Details" 
          component={ Details }
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Feather name="shopping-cart" size={ 24 } color="#FFF"/>
                </TouchableOpacity>
              )
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}