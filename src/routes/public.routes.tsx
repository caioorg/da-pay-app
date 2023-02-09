import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { SignIn, SignUp } from '../screens'
const { Navigator, Screen } = createBottomTabNavigator()

export const PublicRoutes = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
      display: 'none'
    },
  }

  return (
    <Navigator screenOptions={screenOptions} initialRouteName='signup'>
      <Screen name='signin' component={SignIn} options={{ tabBarButton: () => null }} />
      <Screen name='signup' component={SignUp} options={{ tabBarButton: () => null }} />
    </Navigator>
  )
}
