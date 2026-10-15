const App = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-linear-to-br from-
    bg-indigo-950 via-indigo-700 to-violet-700">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0 flex items-center">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-indigo-600 font-bold text-xl">R</span>
                </div>
                <span className="mr-3 text-white font-medium">رابط کاربری React</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-linear-to-r from-emerald-600 to-cyan-400 text-white px-5 py-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 ">
                ثبت‌نام
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                <span className="block">رابط کاربری مدرن</span>
                <span className="block text-cyan-300">ساخته شده با Tailwind</span>
              </h1>
              <p className="mt-3 text-base text-white/80 sm:mt-5 sm:text-xl lg:text-lg">
                یک رابط کاربری زیبا و واکنش‌گرا که با React و Tailwind CSS ساخته شده است.
                ایده‌آل برای برنامه‌های وب مدرن.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-right">
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 flex-1">
                    شروع کنید
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300 flex-1">
                    بیشتر بدانید
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-full bg-linear-to-r from-blue-500 to-violet-500 p-8 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 w-full">
                        {[...Array(9)].map((_, i) => (
                          <div 
                            key={i} 
                            className="aspect-w-1 aspect-h-1 rounded-md shadow-md bg-white/20 backdrop-blur-sm hover:bg-white/30 transition duration-300"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              ویژگی ها مهم
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-white/70">
              هر آنچه برای ساخت رابط‌های کاربری شگفت‌انگیز نیاز دارید
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "طراحی واکنش‌گرا",
                description: "اجزای کاملاً واکنش‌گرا که در هر دستگاهی، از موبایل گرفته تا دسکتاپ، عالی به نظر می‌رسند."
              },
              {
                title: "رابط کاربری مدرن",
                description: "طراحی زیبا و مدرن با توجه به جزئیات و تجربه کاربری."
              },
              {
                title: "نیرو گرفته از Tailwind",
                description: "ساخته شده با Tailwind CSS برای توسعه سریع رابط کاربری و سفارشی‌سازی آسان."
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition duration-300"
              >
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-linear-to-br from-cyan-500 to-indigo-500 mb-5">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}



export default App