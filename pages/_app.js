import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import {useEffect} from "react";
import Layout from "@/components/layout/Layout";
import {ToastContainer} from "react-toastify";
import {AuthProvider} from "@/context/AuthContext";
import axios from "axios";


axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_URL;

function MyApp({Component, pageProps}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.js')
    }, []);

    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer/>
            </Layout>
        </AuthProvider>
    )
}

export default MyApp
