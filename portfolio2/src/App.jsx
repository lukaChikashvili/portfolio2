import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"


function App() {
 
  // retrieve state from context
  const { setFirstPage, setSecondPage, setThirdPage, firstPage} = useContext(UserContext);


  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     
       
    </>
  )
}

export default App
