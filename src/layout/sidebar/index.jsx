export default function Sidebar() {
    return(
        <div className="fixed right-0 h-screen w-64 bg-blue-200 shadow-lg flex flex-col justify-between">
            {/* top content */}
            <div className="flex items-center justify-between h-16 p-2 shadow-md bg-blue-300 ">
                <div>
                    <h1>پنل مدیریت</h1>
                </div>
                <div>
                    <h1>darkmode</h1>
                </div>
            </div>
            {/* bottom content */}
            <div className="flex flex-col gap-4 flex-1 p-4 bg-blue-200 rounded-b-lg">
                <ul>
                    <li className="hover:bg-blue-100 p-2 rounded">
                        <p>کاربران</p>
                    </li>
                    <li className="hover:bg-blue-100 p-2 rounded">
                        <p>پست ها</p>
                    </li>
                    <li className="hover:bg-blue-100 p-2 rounded">
                        <p>کامنت ها</p>
                    </li>
                    <li className="hover:bg-blue-100 p-2 rounded">
                        <p>تسک ها</p>
                    </li>
                    <li className="hover:bg-blue-100 p-2 rounded">
                        <p>گالری</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}