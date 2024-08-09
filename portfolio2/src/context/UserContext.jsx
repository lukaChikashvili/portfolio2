import { createContext, useState } from "react";



export const UserContext = createContext();


const UserProvider = ({ children }) => {
  
    const [changePosition, setChangePosition] = useState(false);

    return (
        <UserContext.Provider value = {{ changePosition, setChangePosition}}>
          {children}
        </UserContext.Provider>
    )
}


export default UserProvider