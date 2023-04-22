import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp } from "../screens";
const Stack = createStackNavigator();

export const PublicRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    );
}
