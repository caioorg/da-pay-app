import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'
import { Home, Dashboard, Profile, Services } from '../screens'
const { Navigator, Screen } = createBottomTabNavigator()

export const PrivateRoutes = () => {
  const { colors, sizes } = useTheme()

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.yellow[500],
    tabBarInactiveTintColor: colors.black,
    tabBarLabelPosition: 'beside-icon',
    tabBarStyle: {
      position: 'absolute',
      height: sizes[22],
      borderTopWidth: 0,
      backgroundColor: colors.black,
    },
    tabBarItemStyle: {
      position: 'relative',
      top: Platform.OS === 'android' ? -10 : 0
    }
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="home" component={Home}/>
      <Screen name="dashboard" component={Dashboard} />
      <Screen name='profile' component={Profile} />
      <Screen name='services' component={Services} />
    </Navigator>
  )
}
