import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
    useEffect
} from "react";
import { useSetRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IAuth from "@app/common/contracts/auth";
import { showFullLoadingState } from "@app/common/helpers/globalState";
import api from "@app/common/config/api";
import AuthService from "@app/services/auth";

interface AuthContextDataProps {
    user: IAuth.Info | null;
    signIn: (data: IAuth.SignIn) => void;
    signUp: () => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const setFullLoading = useSetRecoilState(showFullLoadingState);
    const [user, setUser] = useState({} as IAuth.Info | null);

    useEffect(() => {
        (async () => {
            const storage = await AsyncStorage.getItem('@DP:User')
            if(storage) setUser(JSON.parse(storage))
        })()
    }, [])

    const signIn = useCallback(async ({ email, password }: IAuth.SignIn) => {
        try {
            setFullLoading({ value: true });
            const result = await AuthService.signIn({ email, password });

            const { data, ...rest } = result as { data: IAuth.Info };
            setUser(data);
            api.defaults.headers.common["Authorization"] = `Bearer ${
                (rest as { accessToken: string }).accessToken
            }`;
            await AsyncStorage.setItem("@DP:User", JSON.stringify(data));
            await AsyncStorage.setItem("@DP:Token", JSON.stringify(rest));
        } catch (error) {
            console.log("deu erro");
            // TODO: toast de error
        } finally {
            setFullLoading({ value: false });
        }
    }, []);

    const signUp = useCallback(() => {}, []);

    const logout = useCallback(async () => {
        await AsyncStorage.clear()
        setUser(null)
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signUp, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextDataProps {
    const context = useContext(AuthContext);

    return context;
}
