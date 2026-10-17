import { useEffect, useState } from "react"


const App = () => {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      setNotification(`تبریک شما به عدد ${count} رسیدید 🎉`);
      setTimeout(()=> setNotification(null), 3000);
    }
  }, [count])

  return (
    <div dir="rtl" className="min-h-screen bg-linear-to-br from-
    bg-indigo-950 via-indigo-700 to-violet-700 flex flex-col justify-center items-center p-4">
      {/* Main counter card */}
      <div className="bg-indigo-900/30 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full text-center relative overflow-hidden border border-white/10">
        
        <h1 className="text-4xl font-bold text-white mb-6 tracking-wider">شمارنده هوشمند</h1>

        <div className="bg-indigo-800/40 backdrop-blur-md rounded-lg p-10 mb-8 border border-white/10 ">
          <div className="relative">
            <span className="block text-8xl font-bold text-white transition-all duration-300 transform"
                  style={{ textShadow: '0 4px 18px rgba(0,0,0,0.4)' }}>
              {count}
            </span>
            {count !== 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-400 px-2 py-1 rounded-full text-sm font-bold text-white shadow-lg">
                {count % 2 === 0 ? 'زوج' : 'فرد'}
              </span>
            )}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button onClick={()=> setCount(count - 1)}
                  className="bg-blue-500/90 hover:bg-blue-600/90 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50">
              -
          </button>
          <button onClick={()=> setCount(count + 1)}
                  className="bg-blue-500/90 hover:bg-blue-600/90 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50">
              +
          </button>
        </div>

        {/* reset button */}
        <button onClick={()=> setCount(0)} 
                className="mt-4 text-white/80 text-sm underline transition-colors font-bold">
            بازنشانی
        </button>
      </div>

      {/* Notification Box */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-blue-400 shadow-lg px-4 py-2 text-white rounded-lg transition-all animate-bounce">
          {notification}
        </div>
      )}


    </div>
  )
}



export default App
