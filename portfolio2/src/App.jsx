import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"


function App() {
 

  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     <div className="absolute bg-transparent top-0 left-0 w-full min-h-screen -z-10">
         <div className="absolute right-12 top-56 flex flex-col gap-4">
            <button>001</button>
            <button>002</button>
            <button>003</button>
            <button>004</button>
         </div>
       </div>
    </>
  )
}

export default App
