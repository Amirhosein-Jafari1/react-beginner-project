import { useEffect, useState } from "react";
import { deleteUserService, getUsersService } from "../../services/users";
import { FaUserPlus } from "react-icons/fa";
import UsersTable from "./_components/UsersTable" ;
import { Link } from "react-router";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const handleGetUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getUsersService();
            setUsers(data || []);
        } catch (error) {
            console.log(error);
            setError("دریافت اطلاعات با مشکل مواجه شد!");
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        handleGetUsers();
    }, []);

    const handleDelete = async (id) => {
        const res = await deleteUserService(id);
        if(res.status === 200){
          alert('عملیات با موفقیت انجام شد!');
          setUsers(users.filter( user => user.id !== id));
        }
    }

    if(error) {
        return <ErrorMessage message={error} onRetry={handleGetUsers}/>
    }

    return(
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
                <Link to={"/users/add"} className="bg-blue-400 dark:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow">
                    <FaUserPlus/>
                    <span>افزودن کاربر</span>
                </Link>
            </div>

            {loading ? <Loading/> : <UsersTable users={users} handleDelete={handleDelete}/> }
            
        </div>
    );
}