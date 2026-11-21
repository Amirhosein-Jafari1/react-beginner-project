const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center py-50 gap-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-gray-500 text-lg">
                در حال دریافت اطلاعات...
            </p>
        </div>
    );
};

export default Loading;