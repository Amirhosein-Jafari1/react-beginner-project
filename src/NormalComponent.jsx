import { useCallback, useState } from "react";

const NormalComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("default");

    const handleAddCount = useCallback(() => {
        console.log("🔁 Button clicked text:", text);
        setCount ((prev) => prev + 1);
    }, [text]);

    console.log("Component re-rendered");
    

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-400">
            <h2 className="text-2xl font-bold text-cyan-400!">With useCallback</h2>
            <p className="text-gray-700 font-medium">Count: <span className="text-cyan-400 font-bold">{count}</span></p>
            <div className="space-y-3">
                <button
                  onClick={handleAddCount}
                  className="w-full mb-2 py-2 bg-cyan-400 text-white rounded-md! hover:bg-cyan-500 transition-colors duration-300 focus:outline-none">
                    Add Count
                </button>
                <input
                  type="text"
                  value={text}
                  onChange={(e)=> setText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-400! focus:border-cyan-400!"
                  placeholder="Type something..." />
            </div>
        </div>
    );
};

export default NormalComponent;