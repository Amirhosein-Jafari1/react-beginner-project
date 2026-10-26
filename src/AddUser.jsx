import { Link } from "react-router";

const AddUser = () => {
    return (
        <div className="fixed w-full! h-screen left-0 top-0 z-20 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-1/3 py-5 rounded-2xl shadow ">
                <h2 className="text-2xl font-bold text-gray-800! text-center">افزودن کاربر</h2>
                <form className="p-4 rounded-lg shadow-md mb-4!">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-gray-800!">نام کاربر</label>
                        <input type="text" id="name" className="p-2 border border-gray-300 rounded focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="name" className="text-gray-800!"> ایمیل کاربر</label>
                        <input type="email" id="name" className="p-2 border border-gray-300 rounded focus:outline-none" />
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-150">افزودن کاربر</button>
                </form>

                <div className="flex justify-end px-10">
                    <Link 
                        to={"/users"}
                        className="px-4 py-2 bg-gray-500 text-white rounded no-underline!">
                        بازگشت
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddUser;