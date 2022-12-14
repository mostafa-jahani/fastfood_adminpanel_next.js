import useSWR from 'swr'
import {handleError} from "@/lib/helper";
import {toast} from "react-toastify";
import Loading from "@/components/Loading";
import Link from "next/link";
import UserList from "@/components/users/List";
import {useState} from "react";

const UsersPage = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const {data, error} = useSWR(`/global?url=/users&page=${pageIndex}`)
    if (error) toast.error(handleError(error))
    if (!data) return <Loading/>

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">کاربران</h4>
                <Link className="btn btn-sm btn-outline-dark" href="/users/create">ایجاد کاربر</Link>
            </div>

            <UserList users={data.users} />

            <div className="d-flex justify-content-center">
                <nav aria-label="navigation">
                    <ul className="pagination">
                        {data.meta.links.slice(1, -1).map((link, index) => (
                            <li key={index} className={link.active ? "page-item active" : "page-item"}>
                                <button onClick={() => setPageIndex(link.label)} className="page-link" disabled={link.active ? true : false}>
                                    <span>{link.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default UsersPage;
