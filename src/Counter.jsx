export default function Counter({count, setCount}) {
    console.log("Counter component rendered");

    return(
        <div className="grid place-items-center p-5 bg-gray-100 rounded-lg shadow">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Counter</h1>
            <p className="text-lg text-gray-600 mb-6">Count: {count}</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 rounded">
                Add 
              </button>
        </div>
    )
}