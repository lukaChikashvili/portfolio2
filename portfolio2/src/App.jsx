import { Route, Routes } from "react-router-dom";
import CanvasElement from "./components/CanvasElement";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import gsap from "gsap";
import Header from "./components/Header";
import { ArrowRight } from "lucide-react";
import Loader from "./components/Loader";

function App() {
  const { setChangePosition } = useContext(UserContext);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);

   
      gsap.to(".title", {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });

      gsap.to(".title2", {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [showLoader]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={showLoader ? <Loader /> : <CanvasElement />}
        />
      </Routes>

      {!showLoader && (
        <div className="absolute top-0 left-0 bg-transparent w-full h-screen flex flex-col items-center justify-center gap-8 -mt-4">
          <h1 className="text-6xl text-white title opacity-0">
            Hey! I'm{" "}
            <span
              className="text-black span duration-500 ease hover:text-[#FF5F00]"
              onMouseEnter={() => setChangePosition(true)}
              onMouseLeave={() => setChangePosition(false)}
            >
              Luka Chikashvili
            </span>
          </h1>
          <p className="text-4xl text-white title2 flex gap-4">
            <span className="title-span flex items-center gap-4">
              Front end developer
            </span>{" "}
            & Polyglot
          </p>
          <div className="flex items-center gap-8">
            <button
              className="text-xl text-white flex gap-2 items-center"
              data-replace="see my projects"
            >
              <ArrowRight /> see my projects
            </button>

            <button
              className="text-xl text-white flex gap-2 items-center"
              data-replace="who am i?"
            >
              <ArrowRight /> who am i?
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
