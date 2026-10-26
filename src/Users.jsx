import { Link, Outlet } from "react-router";

const Users = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-center animate-bounce">
          <h2 className="text-2xl font-bold"> به صفحه کاربران خوش آمدید</h2>
        </div>
        <div className="flex items-center justify-center gap-4 p-4">
          <Link
            to={"/users/add-user"}
            className="px-4 py-2 rounded no-underline! bg-emerald-500 text-white hover:scale-105 transition-transform duration-300"      
          >
              افزودن کاربر
          </Link>
          <Link
            to={"/users/user-list"}
            className="px-4 py-2 rounded no-underline! bg-cyan-600 text-white hover:scale-105 transition-transform duration-300"      
          >
              لیست کاربران
          </Link>
        </div>
        
        <Outlet/>
        
      </div>
    );
};

export default Users;