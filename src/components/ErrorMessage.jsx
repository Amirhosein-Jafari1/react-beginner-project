import { CgDanger } from "react-icons/cg";

const ErrorMessage = ({message, onRetry}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-50">
            <div className="text-red-500 text-4xl">
                <CgDanger/>
            </div>

            <p className="text-gray-800 font-semibold">
                {message || "خطایی رخ داده است!"}
            </p>

            <button
                onClick={onRetry}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
            >
                تلاش مجدد
            </button>
        </div>
    );
};

export default ErrorMessage;