import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { StyleSheet, View } from "react-native";
import Basico from "./screens/Basico";
import Avanzado from "./screens/Avanzado";

const Stack = createStackNavigator();

export default function App() {

	return (
		// <View style={styles.container}>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Inicio" component={Home} />
				<Stack.Screen name="Basico" component={Basico} />
				<Stack.Screen name="Avanzado" component={Avanzado} />
			</Stack.Navigator>
		</NavigationContainer>
		// </View>
	)
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0086a4ff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });