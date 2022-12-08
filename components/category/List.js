import Link from "next/link";

const CategoryList = ({ categories }) => {

    return (
        <div className="table-responsive">
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th>نام</th>
                        <th>توضیحات</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <div className="d-flex">
                                    <Link href={`categories/${category.id}`} className="btn btn-sm btn-outline-dark me-2">نمایش</Link>
                                    <Link href={`/categories/edit/${category.id}`} className="btn btn-sm btn-dark">ویرایش</Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList;