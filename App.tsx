import { NativeBaseProvider, StatusBar } from 'native-base'
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'
import { Loading } from './src/components/Loading'
import { ThemeNative } from './src/styles/theme'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold })

  return (
    <NativeBaseProvider theme={ThemeNative}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
