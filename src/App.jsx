import { useState } from "react"
import UserComponent from "./usersComponents/UserComponent";
import GuestComponent from "./guestComponents/GuestComponent";

const App = ()=> {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <div className="app-container">
      
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '15px 20px',
        borderRadius: '0 0 10px 10px',
        background: 'linear-gradient(to right, #38ceb0, #1fd9e0)',
        zIndex: '20',
        position: 'sticky',
        top: '0',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            color: '#1ac6cc',
            padding: '10px'
          }}>
            R
          </div>
          <span>React App {new Date().getFullYear()}</span>
        </div>

        <button 
          className={`toggle-btn ${isLogined ? "logout" : "login"}`}
          onClick={()=> setIsLogined(!isLogined)}>
            {isLogined ? "Logout" : "Login"}
        </button>
      </header>
      
      
      <div className="app-content">
        {isLogined ? <UserComponent/> : <GuestComponent/>}
      </div>
    </div>
  )
}

export default App