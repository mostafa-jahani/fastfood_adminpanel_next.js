import Loading from "@/components/Loading";
import { handleError } from "@/lib/helper";
import { useRouter } from "next/router"
import { toast } from "react-toastify";
import useSWR from "swr";
import DeleteUser from "@/components/users/Delete";

const ShowUser = () => {
    const router = useRouter();
    const { data: user, error } = useSWR(router.query.id && `/global?url=/users/${router.query.id}`)
    if (error) return toast.error(handleError(error))
    if (!user) return <Loading />

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">کاربر : {user.name}</h4>
            </div>
            <div>
                <div className="row gy-4">
                    <div className="col-md-3">
                        <label className="form-label">نام</label>
                        <input type="text" className="form-control" disabled placeholder={user.name} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">ایمیل</label>
                        <input type="text" className="form-control" disabled placeholder={user.email} />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">شماره تماس</label>
                        <input type="text" className="form-control" disabled placeholder={user.cellphone} />
                    </div>
                </div>
            </div>

            <DeleteUser id={user.id} />
        </>
    )
}

export default ShowUser