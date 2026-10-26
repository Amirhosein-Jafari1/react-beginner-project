import Users from "./Users";
import Posts from "./Posts";
import { NavLink, Route, Routes } from "react-router";
import AddUser from "./AddUser";

const App = () => {
  return (
    <div className="min-h-screen bg-gradiant-to-r from-blue-50 to-indigo-100">
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
              <Routes>
                <Route path="/users" element={<Users/>}>
                  <Route path="/users/add-user" element={<AddUser/>}></Route>
                </Route>
                <Route path="/posts" element={<Posts/>}></Route>
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};




export default App
