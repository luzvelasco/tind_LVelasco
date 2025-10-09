import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavDrawer from './src/navigation/NavDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'></StatusBar>
      <NavDrawer></NavDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
