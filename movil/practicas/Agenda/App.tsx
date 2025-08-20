import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Actividades from './components/Actividades';

export default function App() {
  return (
    <View style={styles.container}>
      <Actividades />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a40000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

