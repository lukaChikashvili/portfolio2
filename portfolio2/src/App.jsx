import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"


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
