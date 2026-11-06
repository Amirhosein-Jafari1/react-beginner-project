import { useContext } from "react"
import { UserContext } from "./UsersContext"

export const permissonHOC = (WrappedComponent) => {
    const NewComponent = (props) => {
        console.log(props);

        const {hasPermisson} = useContext(UserContext);
        return hasPermisson ? <WrappedComponent {...props}/> : null;
    }

    return NewComponent
}