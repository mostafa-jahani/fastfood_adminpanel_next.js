import useSWR from 'swr'
import {handleError} from "@/lib/helper";
import {toast} from "react-toastify";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const Home = () => {
    const Chart = dynamic(() => import('@/components/Chart'), { ssr: false });
    const { data, error } = useSWR('/global?url=/transactions/chart')
    if (error) toast.error(handleError(error))
    if (!data) return <Loading />

    return (
        <>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="fw-bold">داشبورد</h4>
            </div>

            <Chart data={data}/>
        </>
    )
}


export default Home;
