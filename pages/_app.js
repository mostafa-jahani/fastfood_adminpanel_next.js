import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/globals.css'
import {useEffect} from "react";
import Layout from "@/components/layout/Layout";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, []);
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
