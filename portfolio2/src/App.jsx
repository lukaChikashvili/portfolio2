import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"


function App() {
 

  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     <div className="absolute bg-transparent top-0 left-0 w-full min-h-screen -z-10">
        sfsf
       </div>
    </>
  )
}

export default App
