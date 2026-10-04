const UsersInfo = ({name, age, email}) => {
    return (
        <div>
            <ul>
                <li>
                    <strong>Name:</strong> {name}
                </li>
                <li>
                    <strong>Age:</strong> {age}
                </li>
                <li>
                    <strong>Email:</strong> {email}
                </li>
            </ul>
        </div>
    );
};

export default UsersInfo;