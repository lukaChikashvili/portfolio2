import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Menu, X } from 'lucide-react';
import gsap from 'gsap'

const Header = () => {
    
  const { setShowMenu, showMenu, setClosed, setProjects, currentProjectIndex, projects } = useContext(UserContext);


  const closeMenu = () => {

    
    setShowMenu(false);
    setProjects(false)
   
   
  
    
  
  }

  const openMenu = () => {
    setShowMenu(true);
    
  
  }



  return (
    <div className='flex header'>
     
        <div className='absolute text-white top-8 text-2xl right-12 cursor-pointer z-10 '>
           <p style={{display: projects ? "none" : "flex"}}>{showMenu ? <X className='icon' onClick={closeMenu} /> : <Menu onClick={openMenu}  /> }</p>
        </div>
    </div>
  )
}

export default Header
