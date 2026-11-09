import { memo } from "react";

const ChildComponent = () => {
    console.log("ChildComponent rendered");
    return (
        <div className="grid place-items-center p-5 bg-gray-100 rounded-lg shadow">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">به دنیای جدید خوش‌آمدید</h1>
            <p className="text-lg text-gray-600 mb-6">
                یک دنیای جدید و پر از امکانات است. در اینجا می‌توانید چیزهای جدید کشف کنید و تجربیات جدیدی کسب کنید.
            </p>
        </div>
    );
};

export default memo(ChildComponent);