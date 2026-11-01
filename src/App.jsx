import Users from "./Users";
import Posts from "./Posts";
import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router";
import AddUser from "./AddUser";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import NotFound from "./NotFound";

const App = () => {
  const navigate = useNavigate();

  const handleSomeAction = ()=> {
    // Do something ......
    navigate("/users", {state: {testParams: "123"}});
  }


  return (
    <div className="min-h-screen bg-linear-to-r from-blue-500! to-indigo-700! p-2">
      <div className="max-w-4xl mx-auto bg-white rounded shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-800! italic">React App</h1>
          <div className="flex justify-center mb-8 gap-4">
            <NavLink
              to={"/users"}
              className={({ isActive}) => `px-4 py-2 rounded-2 no-underline! ${isActive
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              کاربران
            </NavLink>
            <NavLink
              to={"/posts"}
              className={({ isActive}) => `px-4 py-2 rounded-2 no-underline! ${isActive
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              پست ‌ها
            </NavLink>
          </div>

          <div className="bg-gray-50 rounded p-4">
            <h1 className="text-center">به اپلیکیشن من خوش آمدید🖐</h1>
            <button onClick={handleSomeAction} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2 transition-colors duration-150">
               انجام عملیات و ریدایرکت
            </button>
              <Routes>
                <Route path="/users" element={<Users/>}>
                  <Route path="add-user" element={<AddUser/>}></Route>
                  <Route path="user-list" element={<UserList/>}></Route>
                  <Route path="user-details/:userId" element={<UserDetails/>}></Route>
                </Route>
                <Route path="/posts" element={<Posts/>}></Route>
                <Route path="/" element={<Navigate to={"/users"}/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};




export default App
