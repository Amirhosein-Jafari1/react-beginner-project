import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const PostsTable = ({posts, handleDelete}) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <table className="table-auto w-full text-center">
                <thead className="bg-blue-400 dark:bg-blue-900">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">عنوان</th>
                        <th className="px-4 py-2">متن پست</th>
                        <th className="px-4 py-2">عملیات</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200 dark:bg-gray-700">
                    {posts.slice(0, 20).map((post) => (
                        <tr key={post.id} className='border-b'>
                            <td className="px-4 py-2">{post.id}</td>
                            <td className="px-4 py-2">{post.title}</td>
                            <td className="px-4 py-2">{post.body}</td>
                            <td className="flex items-center gap-2 px-4 py-2">
                                <Link to={`/posts/edit/${post.id}`} className="text-blue-500" state={{ post }}>
                                    <FaEdit/>
                                </Link>
                                <button className="text-red-500" onClick={() => handleDelete(post.id)} >
                                    <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsTable;