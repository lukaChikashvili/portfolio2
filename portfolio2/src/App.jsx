import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"


function App() {
 


  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     
       
    </>
  )
}

export default App
