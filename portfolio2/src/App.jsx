import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"


function App() {
 
  // retrieve state from context
  const { setFirstPage, setSecondPage, setThirdPage} = useContext(UserContext);


  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     <div className="absolute bg-transparent top-0 left-0 w-full min-h-screen z-10">
         <div className="absolute  right-12 top-56 flex flex-col gap-4   ">
            <button onClick={() => setFirstPage(true)}  className="cursor-pointer pointer-events-auto ">001</button>
            <button onClick={() => setSecondPage(true)} className="cursor-pointer pointer-events-auto">002</button>
            <button onClick={() => setThirdPage(true)}  className="cursor-pointer pointer-events-auto">003</button>
            <button>004</button>
         </div>
       </div>
    </>
  )
}

export default App
