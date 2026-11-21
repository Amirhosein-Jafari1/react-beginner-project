import { useEffect, useState } from "react"
import { deletePostService, getPostsService } from "../../services/posts";
import { FaPlus } from "react-icons/fa";
import PostsTable from "./_components/PostsTable";
import { Link } from "react-router";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleGetPosts = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getPostsService();
            setPosts(data || []);
        } catch (error) {
            console.log(error);
            setError("دریافت اطلاعات با مشکل مواجه شد!")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, []);

    const handleDelete = async (id) => {
        const res = await deletePostService();
        console.log(res)
        if(res.status === 200) {
            alert('عملیات با موفقیت انجام شد!');
            setPosts(posts.filter((post) => post.id !== id));
        }
    };

    if(error) {
        return <ErrorMessage message={error} onRetry={handleGetPosts}/>
    };

    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">مدیریت پست‌ها</h1>
                <Link to={"/posts/add"} className="bg-blue-400 px-4 py-2 rounded-md text-white flex items-center gap-2 shadow">
                    <FaPlus className="size-3"/>
                    <span>افزودن پست</span>
                </Link>
            </div>

            {loading ? <Loading/> : <PostsTable posts={posts} handleDelete={handleDelete}/>}
            
        </div>
    )
}