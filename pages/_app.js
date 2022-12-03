import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import {useEffect} from "react";
import Layout from "@/components/layout/Layout";
import {ToastContainer} from "react-toastify";


function MyApp({Component, pageProps}) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.js')
    }, []);
    return (
        <Layout>
            <Component {...pageProps} />
            <ToastContainer/>
        </Layout>
    )
}

export default MyApp
