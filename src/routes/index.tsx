import { NavigationContainer } from '@react-navigation/native'
import { Box } from 'native-base'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'

export const Routes = () => {
  const isAuthenticated = false

  return (
    <Box flex={1}>
      <NavigationContainer>
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </NavigationContainer>
    </Box>
  )
}
