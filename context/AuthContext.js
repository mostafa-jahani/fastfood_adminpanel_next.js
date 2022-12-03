import {createContext, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {handleError} from "@/lib/helper";
import {useRouter} from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //Login User
    const login = async ({email, password}) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`, {
                email, password
            })
            setUser(res.data.data.user)
            await router.push('/')
        }catch (err) {
            toast.error(handleError(err))
        }finally {
            setLoading(false)
        }
    }

    //Logout User
    const logout = async () => {
        try {
            setLoading(true)
            await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/logout`)
            setUser(null)
            await router.push('/auth/login')
        }catch (err) {
            toast.error(handleError(err))
        }finally {
            setLoading(false)
        }
    }

    return <AuthContext.Provider value={{user, loading, login, logout}}>
        {children}
    </AuthContext.Provider>
}


export default AuthContext;