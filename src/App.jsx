import UsersInfo from "./UsersInfo";

const App = ()=> {
    const users = [
        {name:"Leanne Graham", age:32, email:"Sincere@april.biz"},
        {name:"Ervin Howell", age:26, email:"Shanna@melissa.tv"},
        {name:"Patricia Lebsack", age:22, email:"Julianne.OConner@kory.org"},
        {name:"Chelsey Dietrich", age:18, email:"Lucio_Hettinger@annie.ca"},
    ];
    return (
        <div>
            {users.map((user) => (
                <UsersInfo key={user.name} name={user.name} age={user.age} email={user.email}/>
            ))}
        </div>
    )
}

export default App