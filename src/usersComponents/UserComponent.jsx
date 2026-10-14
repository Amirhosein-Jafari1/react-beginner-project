import { useEffect, useState } from "react";
import styles from "./UsersComponent.module.css"

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
        console.log("age is 30");
    }
  }, [age]);


    return (
        <div className={styles.userContainer}>
            <h1 className={styles["user-title"]}>User Component</h1>
            <button className={styles["user-btn"]} onClick={()=> setAge((prev) => prev + 1)}>
                Change Age
            </button>

            <ul className={styles["user-info"]}>
                <li>Name: Amir</li>
                <li>Age: {age}</li>
                <li>Email: info@example.com</li>
            </ul>
        </div>
    );
};

export default UserComponent;