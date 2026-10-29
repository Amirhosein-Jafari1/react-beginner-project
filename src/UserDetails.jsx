import { Link, useLocation } from "react-router";

const UserDetails = () => {

    const location = useLocation();
    const {user: selectedUser} = location.state;

    if(!selectedUser) return null;

    // استخراج حروف اول نام و نام خانوادگی برای نمایش در آواتار
    const initials = selectedUser.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

    return (
        <div className="fixed w-full h-screen top-0 left-0 bg-black/50 z-20 flex items-center justify-center">
            <div className="bg-white shadow-md p-6 max-w-md mx-auto rounded-2xl">
                <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center overflow-hidden ml-4">
                        <span className="text-white text-3xl font-bold">{initials}</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800!">{selectedUser.name}</h2>
                        <p className="text-gray-600!">{selectedUser.company.name}</p>
                    </div>
                </div>

                <div className="border-t border-gray-200! pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">اطلاعات شخصی</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">نام کاربری: </span>
                            <span className="font-medium">{selectedUser.name}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">ایمیل: </span>
                            <span className="font-medium">{selectedUser.email}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">تلفن:</span>
                            <span className="font-medium">{selectedUser.phone}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">وبسایت:</span>
                            <span className="font-medium">{selectedUser.website}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200! pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">آدرس</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">خیابان:</span>
                            <span className="font-medium">{selectedUser.address.street}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">شهر: </span>
                            <span className="font-medium">{selectedUser.address.city}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">کدپستی:</span>
                            <span className="font-medium">{selectedUser.address.zipcode}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200! pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">شرکت</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">نام:</span>
                            <span className="font-medium">{selectedUser.company.name}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-24 text-gray-600">شماره: </span>
                            <span className="font-medium">{selectedUser.company.catchPhrase}</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end px-2 mt-10">
                    <Link 
                      to={"/users/user-list"}
                      className="bg-gray-500 text-white rounded px-2 py-1">
                        بازگشت
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;