import {createContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async ({email, password}) => {
        console.log(email, password)
    }

    return <AuthContext.Provider value={{user, loading, login}}>
        {children}
    </AuthContext.Provider>
}


export default AuthContext;