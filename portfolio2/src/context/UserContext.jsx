import { createContext, useState } from "react";



export const UserContext = createContext();


const UserProvider = ({ children }) => {
  
    const [changePosition, setChangePosition] = useState(false);
    const [changeTitle, setChangeTitle] = useState(false);

 

    return (
        <UserContext.Provider value = {{ changePosition, setChangePosition, changeTitle, setChangeTitle}}>
          {children}
        </UserContext.Provider>
    )
}


export default UserProvider