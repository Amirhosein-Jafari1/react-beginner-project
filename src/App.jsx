import { useRef, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);
  let countvalue = useRef(0);

  const handleClick = () => {
    countvalue.current += 2;
    setCount(countvalue.current + 1);
  }

  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-r from-teal-700 via-cyan-700 to-emerald-500 ">
      <div className="p-8 bg-white shadow-lg rounded-xl flex flex-col items-center space-y-6!">
        <h2 className="text-3xl font-bold text-gray-800 ">Counter App</h2>

        <div className=" w-36 h-36 rounded-full flex items-center justify-center bg-linear-to-r from-purple-600 to-pink-600 shadow-lg">
          <span className="text-5xl text-white font-bold">{count}</span>
        </div>

        <button
          onClick={handleClick} 
          className="px-6 py-3 rounded-lg! bg-teal-400 font-bold outline-none transform hover:scale-105 transition-all duration-500">
          increase
        </button>

        <p className="text-gray-600 text-center">Click to increase the counter value</p>
      </div>
    </div>
  )
}



export default App
