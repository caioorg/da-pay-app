import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar } from "native-base";
import { RecoilRoot } from "recoil";
import {
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
    useFonts,
} from "@expo-google-fonts/poppins";
import Loading from "@app/common/components/Loading";
import { ThemeNative } from "@app/styles/theme";
import { Routes } from "@app/routes";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    return (
        <RecoilRoot>
            <NativeBaseProvider theme={ThemeNative}>
                <AuthContextProvider>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    {fontsLoaded ? <Routes /> : <Loading />}
                </AuthContextProvider>
            </NativeBaseProvider>
        </RecoilRoot>
    );
}
