import { NavigationContainer } from '@react-navigation/native'
import { Box } from 'native-base'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'
import { useAuth } from '@contexts/AuthContext'

export const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Box flex={1}>
      <NavigationContainer>
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </NavigationContainer>
    </Box>
  )
}
