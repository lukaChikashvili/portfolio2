import { Route, Routes, useNavigate } from "react-router-dom";
import CanvasElement from "./components/CanvasElement";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import gsap from "gsap";
import Header from "./components/Header";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loader from "./components/Loader";
import ProjectName from "./components/ProjectName";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";


function App() {
  const { setChangePosition, setProjects, projects ,reset,  setReset, showMenu, closed, setShowMenu, setClosed, setAboutPage, aboutPage } = useContext(UserContext);
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
    }, 1000);

    return () => clearTimeout(timer);
  }, [showLoader]);

 

  const handleText = () => {
   gsap.to('.text', {
    opacity: 0,
    display: "none",
    duration: 1.5,
    ease: "power2.inOut",
   });

   setProjects(true);

  }

  const backToMain = () => {
   
    gsap.to(".text", {
      opacity: 1,
      display: "flex",
      duration: 1.5,
      ease: "power2.inOut",
    });

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



    setProjects(false);
    setShowMenu(false);
    setClosed(false);
    
    
    
  };

  useEffect(() => {
    if (showMenu) {
      gsap.to('.text', {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set('.text', { display: 'none' });
        }
      });
    } else {
      gsap.set('.text', { display: 'flex' });
      gsap.to('.text', {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut"
      });
    }
  
    if (closed) {
      gsap.to(".text", {
        opacity: 0,
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          setProjects(true);
          setShowMenu(false);
          setClosed(true);
        }
      });
    }
  
    if (aboutPage) {
      gsap.to(".title, .title2", {
        opacity: 0,
        pointerEvents: 'none',
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
      });
  
      gsap.to('.text', {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set('.text', { display: 'none', pointerEvents: 'none' });
        }
      });
    } else if (!showMenu ) {  
      gsap.set(".title, .title2, .text", { display: 'flex', pointerEvents: 'auto' });
      gsap.to(".title, .title2, .text", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      });
    }
    

    if(projects) {
      gsap.to(".title, .title2, .text", {
        opacity: 0,
        pointerEvents: 'none',
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          setProjects(true);
          setShowMenu(false);
          setClosed(true);
    
        }
      });
    }
  }, [showMenu, closed, aboutPage]);
  

 
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
        <div className="absolute top-0 left-0 bg-transparent w-full h-screen flex flex-col items-center justify-center gap-8 -mt-4 text">
        <h1 className="text-4xl md:text-5xl lg:text-6xl gap-2 md:gap-6 flex flex-col md:flex-row text-white title opacity-0">
    Hey! I'm{" "}
    <span
        className="text-black span duration-500 ease hover:text-[#F5F7F8]"
        onMouseEnter={() => setChangePosition(true)}
        onMouseLeave={() => setChangePosition(false)}
    >
        Luka Chikashvili
    </span>
</h1>
<p className="text-xl md:text-2xl lg:text-3xl text-white title2 flex gap-4">
    <span className="title-span flex items-center gap-4">
        Front end developer
    </span>{" "}
    & Polyglot
</p>
          <div className="flex items-center gap-8">
            <button
              className="text-xl text-white flex gap-2 items-center"
              data-replace="see my projects"
              onClick={handleText}
            >
              <ArrowRight /> see my projects
            </button>

            <button
              className="text-xl text-white flex gap-2 items-center"
              data-replace="who am i?" onClick={() => setAboutPage(true)} 
            >
              <ArrowRight /> who am i?
            </button>
          </div>
        </div>
      )}

      
      {projects && <ProjectName projects={[
    { name: 'MixMaster', stacks: ['React', 'Three.js', 'Tailwind.css', 'MaterialUI'] },
    { name: 'NeoWriters', stacks: ['React', 'Tailwind.css', 'Node.js',  'MongoDB'] },
    { name: 'Planetarium X', stacks: ['Three.js', 'GLSL', 'CSS',  'GSAP'] },
    { name: 'Eternal Memories', stacks: ['React', 'Three.js', 'Tailwind.css',  'Node.js',  'MongoDB'] },
    { name: 'Circus Mircus', stacks: ['Next.js', 'Typescript', 'Tailwind.css',  'GSAP'] },
    { name: 'Vangadamus', stacks: ['React', 'Typescript', 'Three.js',  'React-three/rapier'] },
    { name: 'Cigars', stacks: ['React',  'Three.js', 'GLSL',  'Lucide-react'] },
    { name: 'Paradise', stacks: ['React',  'Three.js', 'GLSL',  'Tailwind.css',  'GSAP'] },
    { name: 'Portfolio', stacks: ['React',  'Three.js',  'Tailwind.css'] },
    
]} />}

      {projects && <span className="absolute text-white text-xl duration-500 ease-in hover:opacity-50  top-12 left-12 cursor-pointer flex items-center gap-4 justify-center " onClick={backToMain}><ArrowLeft /> Back</span>}

{showMenu && <Menu />}

{aboutPage && <AboutMe />}

    </>
  );
}

export default App;