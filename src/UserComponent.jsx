import { useState } from "react";

const UserComponent = () => {
  const [age, setAge] = useState(20);
    return (
        <div>
            <h1>User Component</h1>
            <button onClick={()=> setAge((prev) => prev + 1)}>
                Change Age
            </button>

            <ul>
                <li>name: Amir</li>
                <li>age: {age}</li>
                <li>Email: info@example.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;