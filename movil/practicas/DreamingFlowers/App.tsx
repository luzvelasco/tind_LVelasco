import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Post from './screens/Post';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}>        
        </Stack.Screen>
        <Stack.Screen
          name='Login'
          component={Login}>
        </Stack.Screen>
        <Stack.Screen
          name='Home'
          options={{title: 'Lista de Posts'}}
          component={Home}>
        </Stack.Screen>
        <Stack.Screen
          name='Post'
          options={{title: 'Detalles del Post'}}
          component={Post}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}