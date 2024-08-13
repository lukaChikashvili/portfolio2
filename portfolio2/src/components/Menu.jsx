import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { UserContext } from '../context/UserContext';

const Menu = () => {

    const { showMenu, setHome, setAbout, setMyProject, setContact, closed } = useContext(UserContext);

    useEffect(() => {
        
        if(showMenu) {
            gsap.to('h2', {
                opacity: 1,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1
            });
        }

      
         
        
      
    
    }, [showMenu, closed]);
 

  return (
    <div className='absolute w-full h-screen 
    top-0 left-0 flex flex-col gap-8 items-start justify-center px-36 text-7xl text-white menu '>
       <h2 className='flex items-center gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F]  ' onPointerEnter={() => setHome(true)} onPointerLeave={() => setHome(false)}><span className='text-xl mt-6 '>//001</span>HOME</h2>
       <h2 className='flex items-center gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F] ' onPointerEnter={() => setAbout(true)} onPointerLeave={() => setAbout(false)}><span className='text-xl mt-6 '>//002</span>ABOUT ME</h2>
       <h2 className='flex items-center gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F] ' onPointerEnter ={() => setMyProject(true)} onPointerLeave ={() => setMyProject(false)}><span className='text-xl mt-6 '>//003</span>PROJECTS</h2>
       <h2 className='flex items-center gap-4 opacity-0 cursor-pointer duration-500 ease hover:text-[#31363F] ' onPointerEnter ={() => setContact(true)} onPointerLeave ={() => setContact(false)}><span className='text-xl mt-6 '>//004</span>CONTACT</h2>
    </div>
  )
}

export default Menu
