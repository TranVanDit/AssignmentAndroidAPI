/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import SigninScreen from './src/screens/SigninScreen';
import SplashScreen from './src/screens/SplashScreen';
import SignupScreen from './src/screens/SignupScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Lab3Screen from './src/screens/lab03/Lab03Screen';
import Lab0301Screen from './src/screens/lab03/Lab0301';
import Lab0302Screen from './src/screens/lab03/Lab0302';
import Lab04Screen from './src/screens/lab04/Lab04Screen';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Lab03"
            component={Lab3Screen}
           
          />
          <Stack.Screen
            name="Lab0301"
            component={Lab0301Screen}
          />
          <Stack.Screen
            name="Lab0302"
            component={Lab0302Screen}
          />

          <Stack.Screen
            name="Lab04"
            component={Lab04Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
