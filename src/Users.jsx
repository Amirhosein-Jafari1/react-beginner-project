const Users = ({name, age, city, email, phone, id}) => {

    return (
        <div>
            <h2>Users List:</h2>
            <ul>
                <li>
                    <strong>name:</strong> {name}
                </li>
                <li>
                    <strong>age:</strong> {age}
                </li>
                <li>
                    <strong>city:</strong> {city}
                </li>
                <li>
                    <strong>email:</strong> {email}
                </li>
                <li>
                    <strong>phone:</strong> {phone}
                </li>
                <li>
                    <strong>id:</strong> {id}
                </li>
            </ul>
        </div>
    );
};

export default Users;