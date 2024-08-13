import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { UserContext } from '../context/UserContext';

const Menu = () => {

    const { showMenu } = useContext(UserContext);

    useEffect(() => {
        
            gsap.to('h2', {
                opacity: 1,
                clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1
            });
        
      
    
    }, [showMenu]);
 

  return (
    <div className='absolute w-full h-screen 
    top-0 left-0 flex flex-col gap-8 items-start justify-center px-36 text-7xl text-white menu'>
       <h2 className='flex items-center gap-4 opacity-0'><span className='text-xl mt-6 '>//001</span>HOME</h2>
       <h2 className='flex items-center gap-4 opacity-0'><span className='text-xl mt-6 '>//002</span>ABOUT ME</h2>
       <h2 className='flex items-center gap-4 opacity-0'><span className='text-xl mt-6 '>//003</span>PROJECTS</h2>
       <h2 className='flex items-center gap-4 opacity-0'><span className='text-xl mt-6 '>//004</span>CONTACT</h2>
    </div>
  )
}

export default Menu
