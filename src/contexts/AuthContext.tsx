import IAuth from "@app/common/contracts/auth";
import AuthService from "@app/services/auth";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";

interface UserProps {
    email: string;
    name: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: (data: IAuth.SignIn) => void;
    isAuthenticated: boolean;
    signUp: () => void;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>({} as UserProps);

    const signIn = useCallback(async (data: IAuth.SignIn) => {
        const result = await AuthService.signIn(data)

        console.log({ result })
    }, []);

    const signUp = useCallback(() => {}, []);

    const logout = useCallback(() => {}, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextDataProps {
    const context = useContext(AuthContext);

    return context;
}
