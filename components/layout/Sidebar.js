import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar = () => {

    const router = useRouter()

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className={router.pathname === '/' ? "nav-link active" : "nav-link"} aria-current="page" href="/">
                            <i className="bi bi-grid me-2"></i>
                            داشبورد
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={router.pathname.includes('/users') ? "nav-link active" : "nav-link"} href="/users">
                            <i className="bi bi-people me-2"></i>
                            کاربران
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={router.pathname.includes('/products') ? "nav-link active" : "nav-link"} href="/products">
                            <i className="bi bi-box-seam me-2"></i>
                            محصولات
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={router.pathname.includes('/categories') ? "nav-link active" : "nav-link"} href="/categories">
                            <i className="bi bi-grid-3x3-gap me-2"></i>
                            دسته بندی
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-basket me-2"></i>
                            سفارشات
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-currency-dollar me-2"></i>
                            تراکنش ها
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="bi bi-percent me-2"></i>
                            تخفیف ها
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Sidebar;