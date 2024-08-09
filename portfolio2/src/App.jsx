import { Route, Routes } from "react-router-dom"
import CanvasElement from "./components/CanvasElement"
import { useContext } from "react"
import { UserContext } from "./context/UserContext"


function App() {
 
  const { setChangePosition, changePosition} = useContext(UserContext);

  return (
    <>
     <Routes>
       <Route path="/" element = {<CanvasElement />} />

    
     </Routes>

     
     <div className="absolute top-0 left-0 bg-transparent w-full h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-6xl text-white title">Hey! i'm <span className="text-black " onMouseEnter={() => setChangePosition(true)} onMouseLeave={() => setChangePosition(false)} >Luka Chikashvili</span></h1>
      <p className="text-4xl text-white">Front end developer & Polyglot</p>

 
     </div>
       
    </>
  )
}

export default App
