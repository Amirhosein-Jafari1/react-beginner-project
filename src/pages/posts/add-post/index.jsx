import { useState } from "react"
import { createPostService, updatePostService } from "../../../services/posts";
import { useLocation, useNavigate } from "react-router";

export default function AddPostPage() {
    const navigate = useNavigate();
    
    const location = useLocation();
    const postToEdit = location.state?.post;
    

    const [formData, setFormData] = useState({
        title: postToEdit?.title || '',
        body: postToEdit?.body || ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = postToEdit ? await updatePostService(formData, postToEdit.id) : await createPostService(formData);
        if(res.status === 201 || res.status === 200) {
            // Here you would typically send the data to on API
            alert("عملیات با موفقیت انجام شد!" + res.data.id);
            // Clear form
            setFormData({title: '', body: ''});
            navigate(-1);
        }
    }

    return(
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">{postToEdit ? 'ویرایش پست' : 'افزودن پست'}</h1>
            <form 
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8"
            >
                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">عنوان</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="عنوان پست را وارد کنید"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="body" className="block text-gray-700 dark:text-gray-100 font-medium mb-2">متن پست</label>
                    <input 
                        type="text"
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="عنوان پست را وارد کنید"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg text-white font-medium px-8! py-3 shadow-md "
                    >
                       {postToEdit? 'ویرایش' : 'ثبت'}
                    </button>
                </div>
            </form>
        </div>
    );
}