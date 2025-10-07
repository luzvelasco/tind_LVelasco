import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTabs"
                component={NavTabs}
                options={{ title: "Listado de Tours" }}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeStack