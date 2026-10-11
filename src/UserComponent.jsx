import { useEffect, useState } from "react";

const UserComponent = () => {
  const [age, setAge] = useState(20);

  useEffect (()=> {
    console.log("Send a request to the server");

    const handleClick = ()=> {
        console.log("Age is 20");
    };

    const element = document.getElementById("age");
    element?.addEventListener("click", handleClick);

    return ()=> {
        console.log("Hoping to meet you");
        element?.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect (()=> {
    console.log(age);
    if (age === 30) {
        console.log("age is 30")
    }
  }, [age]);


    return (
        <div>
            <h1>User Component</h1>
            <button onClick={()=> setAge((prev) => prev + 1)}>
                Change Age
            </button>

            <ul>
                <li>Name: Amir</li>
                <li>Age: {age}</li>
                <li>Email: info@example.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;