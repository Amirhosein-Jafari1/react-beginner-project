import { createContext, useState } from "react";

const initialUsers = [
  {id: 1, name:"مهدی حسینی", email:"mahdi@hosseini.com"},
  {id: 2, name:"علی رضایی", email:"ali@rezai.com"},
  {id: 3, name:"محمد احمدی", email:"mohammad@ahmadi.com"},
  {id: 4, name:"سارا موسوی", email:"sara@mousavi.com"},
  {id: 5, name:"فاطمه محمدی", email:"fatima@mohammadi.com"},
  {id: 6, name:"امیرحسین جعفری", email:"amirhossein@jafari.com"},
  {id: 7, name:"قاسمی امیرعلی", email:"amirali@ghasemi.com"},
  {id: 8, name:"زهرا سلیمی", email:"zahra@sallimi.com"},
];

export const UserContext = createContext({
    users: [],
    setUsers: () => {},
    addUser: () => {},
    hasPermisson: false,
    deleteUser: () => {},
    setHasPermisson: () => {},
});

const UserContextProvider = ({children}) => {
  const [hasPermisson, setHasPermisson] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const addUser = (user) => {
    setUsers(...users, user);
  }
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }
  return(
    <UserContext.Provider value={{users, setUsers, addUser, deleteUser, hasPermisson, setHasPermisson}}>
        {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;