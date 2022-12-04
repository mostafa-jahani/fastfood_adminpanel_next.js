import { handleError } from "@/lib/helper";
import axios from "axios";

export default async function handler(req, res) {
    if (!req.cookies.token) {
        res.status(403).json({ message: 'ورود نا موفق یکبار دیگر تلاش کنید' })
    } else if (req.method === 'GET') {

        try {
            const resApi = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}${req.query.url}`, {
                headers: {
                    'Authorization': `Bearer ${req.cookies.token}`
                }
            });

            res.status(200).json(resApi.data.data)

        } catch (err) {
            res.status(422).json({ message: { 'err': [handleError(err)] } })
        }

    }
}