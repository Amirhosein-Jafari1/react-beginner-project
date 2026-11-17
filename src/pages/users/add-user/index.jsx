import { useState } from "react"
import { createUserService, updateUserService } from "../../../services/users";
import { useLocation, useNavigate } from "react-router";


export default function AddUserPage() {
    const navigate = useNavigate()

    const location = useLocation();
    const userToEdit = location.state?.user

    const [formData, setFormData] = useState({
        name: userToEdit?.name || '',
        email: userToEdit?.email || '',
        phone: userToEdit?.phone || '',
        website: userToEdit?.website || ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = userToEdit ? await updateUserService(formData, userToEdit.id) : await createUserService(formData);
        if(res.status === 201 || res.status === 200) {
            // Here you would typically send the data to on API
            alert('عملیات موفقیت آمیز بود!' + res.data.id);
            // Clear form
            setFormData({ name: '', email: '', phone: '', website: ''});
            navigate(-1)
        };
    };

    return(
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">{userToEdit ? 'ویرایش کاربر' : 'افزودن کاربر'}</h1>

            <form 
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8"
            >
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">نام</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="نام خود را وارد کنید"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-100  font-medium mb-2">ایمیل</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="ایمیل خود را وارد کنید"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-100  font-medium mb-2">شماره موبایل</label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="شماره موبایل خود را وارد کنید"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="website" className="block text-gray-700 dark:text-gray-100  font-medium mb-2">وبسایت</label>
                    <input 
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder=" وبسایت خود را وارد کنید"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg text-white font-medium px-8! py-3 shadow-md "
                    >
                       {userToEdit ? 'ویرایش' : 'ثبت'}
                    </button>
                </div>
            </form>


        </div>
    )
}