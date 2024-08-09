import { createContext, useState } from "react";



export const UserContext = createContext();


const UserProvider = ({ children }) => {
  
    // first page
    const [firstPage, setFirstPage] = useState(false);
    // second page
    const [secondPage, setSecondPage] = useState(false);
    // third page
    const [thirdPage, setThirdPage] = useState(false);

    return (
        <UserContext.Provider value = {{ firstPage, setFirstPage, secondPage, setSecondPage, thirdPage, setThirdPage }}>
          {children}
        </UserContext.Provider>
    )
}


export default UserProvider