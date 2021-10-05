import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name="Cadastro"
              component={Cadastro}
              options={{
                headerShown: false
              }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}
