declare namespace IAuth {
    interface SignIn {
        email: string,
        password: string
    }

    interface Auth {
        accessToken: string
        expiresIn: string
    }

    interface Info {
        id: number,
        name: string,
        login: string
    }
}

export default IAuth
