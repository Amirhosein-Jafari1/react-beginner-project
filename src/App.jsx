import { useState } from "react";
import UsersInfo from "./UsersInfo";

const initialUsers = [
    {name:"Leanne Graham", age:32, email:"Sincere@april.biz"},
    {name:"Ervin Howell", age:26, email:"Shanna@melissa.tv"},
    {name:"Patricia Lebsack", age:22, email:"Julianne.OConner@kory.org"},
    {name:"Chelsey Dietrich", age:18, email:"Lucio_Hettinger@annie.ca"},
];


const App = ()=> {
    const [users, setUsers] = useState(initialUsers);
    const handleDelete = (name)=> {
        const newUsers = users.filter((user) => user.name !== name);
        setUsers(newUsers);
    }
    return (
        <div>
            {users.map((user) => (
                <UsersInfo key={user.name} {...user} handleDelete={()=>handleDelete(user.name)} />
            ))}
        </div>
    )
}

export default App