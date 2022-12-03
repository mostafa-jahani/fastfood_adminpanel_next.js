import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import {ToastContainer} from "react-toastify";
import {useRouter} from "next/router";


const Layout = ({children}) => {

    const router = useRouter()

    if (router.pathname === "/auth/login") {
        return (
            <div>{children}</div>
        )
    }

    return (
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}


export default Layout;