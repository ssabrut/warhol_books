import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterScreen2 from './screens/RegisterScreen2';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff" />

      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            header: () => null
          }} />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            header: () => null
          }} />

        <Stack.Screen
          name="RegisterScreen2"
          component={RegisterScreen2}
          options={{
            title: "Sign Up",
            headerTintColor: "gray",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#fff",
              shadowOpacity: 0,
              elevation: 0,
              height: StatusBar.currentHeight - 25,
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

