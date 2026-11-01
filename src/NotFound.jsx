import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-linear-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-4 mt-2 rounded">
            <div className="max-w-lg w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-indigo-600!">۴۰۴</h1>
                    <div className="h-2 w-24 bg-indigo-600 mx-auto my-5 rounded-full"></div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-3">صفحه مورد نظر یافت نشد!</h2>
                <p className="text-gray-600 mb-8">متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.</p>

                <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-linear-to-br from-blue-50 to-indigo-100 px-4 text-sm text-gray-500">یا</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                    <Link 
                      to={"/"}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white   px-4 py-2 rounded transition-colors duration-300 ">
                        بازگشت به خانه
                    </Link>
                    <Link 
                      to={"/users/user-list"}
                      className="bg-white hover:bg-gray-50 text-indigo-600 px-4 py-2 rounded transition-colors duration-300 ">
                        مشاهده کاربران
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;