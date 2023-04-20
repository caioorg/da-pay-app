import api from "@app/common/config/api";
import IAuth from "@app/common/contracts/auth";

export default class AuthService {
    static async signIn({ email, password }: IAuth.SignIn): Promise<{ data: IAuth.Info } | IAuth.Auth  | null> {
        try {
            const response = await api.post('/auth/login', { login: email, password })

            if (response.status === 201) return response.data

            return null
        } catch (error) {
            return null
        }
    }
}
