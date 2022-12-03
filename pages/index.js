const Home = () => {
    return (
        <>
            <header className="navbar text-center navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">webprog.io</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-100"></div>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap d-flex align-items-center">
                        <span className="nav-link">علی شیخ</span>
                        <a className="nav-link px-3" href="#">خروج</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">
                                        <i className="bi bi-grid me-2"></i>
                                        داشبورد
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-people me-2"></i>
                                        کاربران
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./products.html">
                                        <i className="bi bi-box-seam me-2"></i>
                                        محصولات
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-grid-3x3-gap me-2"></i>
                                        دسته بندی
                                    </a>
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

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h4 className="fw-bold">داشبورد</h4>
                        </div>

                        <div id="chartdiv"></div>

                    </main>
                </div>
            </div>
        </>
    )
}


export default Home;
