import { useContext } from 'react';
import { UserContext } from './UsersContext';

const PermissionsRP = ({children}) => {
    const {hasPermisson} = useContext(UserContext);
    return (
        <div>
            {hasPermisson && children()}
        </div>
    );
};

export default PermissionsRP;