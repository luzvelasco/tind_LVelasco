import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavDrawerParams } from "../types/navigation";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Booking from "../screens/Booking";

const Drawer = createDrawerNavigator<NavDrawerParams>();

const NavDrawer = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{ title: 'Inicio' }}>
            </Drawer.Screen>
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Perfil' }}>
            </Drawer.Screen>
            <Drawer.Screen
                name="Bookings"
                component={Booking}
                options={{ title: 'Mis Reservas', headerShown: true }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default NavDrawer;