import Link from "next/link";

const UserList = ({ users }) => {

    return (
        <div className="table-responsive">
            <table className="table align-middle table-striped table-hover">
                <thead>
                    <tr>
                        <th>نام</th>
                        <th>ایمیل</th>
                        <th>شماره تلفن</th>
                        <th>تاریخ عضویت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.cellphone}</td>
                            <td>{user.created_at}</td>
                            <td>
                                <div className="d-flex">
                                    <Link href={`users/${user.id}`} className="btn btn-sm btn-outline-dark me-2">نمایش</Link>
                                    <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-dark">ویرایش</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;