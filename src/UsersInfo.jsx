const UsersInfo = ({name, email, age, handleDelete}) => {
    return (
        <div>
            <ul>
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>age: {age}</li>
                <li>
                    <button onClick={handleDelete}>Delete</button>
                </li>
            </ul>
        </div>
    );
};

export default UsersInfo;