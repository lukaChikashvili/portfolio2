import { createContext, useState } from "react";



export const UserContext = createContext();


const UserProvider = ({ children }) => {
  
    const [changePosition, setChangePosition] = useState(false);
    const [changeTitle, setChangeTitle] = useState(false);
    
    // display projects
    const [projects, setProjects] = useState(false);
 
   // current project index
   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

   const [hideText, setHideText] = useState(false);

   const [showMenu, setShowMenu] = useState(false);

   // menu texts
   const [home, setHome] = useState(false);
   const [about, setAbout] = useState(false);
   const [myProject, setMyProject] = useState(false);
   const [contact, setContact] = useState(false);

   const [closed, setClosed] = useState(false);

   // aboutpage
   const [aboutPage, setAboutPage] = useState(false);

   // reset spheres
   const [reset, setReset] = useState(false);

   const [contactPage, setContactPage] = useState(false);

    return (
        <UserContext.Provider value = {{ changePosition, 
        setChangePosition, changeTitle, setChangeTitle, projects, setProjects,
        currentProjectIndex, setCurrentProjectIndex, hideText, setHideText,
        showMenu, setShowMenu, home, setHome, about, setAbout, myProject, setMyProject,
         contact, setContact, reset, setReset,
        closed, setClosed, aboutPage, setAboutPage, contactPage, setContactPage
        }}>
          {children}
        </UserContext.Provider>
    )
}


export default UserProvider