import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Menu, X } from 'lucide-react';
import gsap from 'gsap'

const Header = () => {
    
  const { setShowMenu, showMenu, setClosed } = useContext(UserContext);


  const closeMenu = () => {

    
  setShowMenu(false);

   

    setClosed(true);
    
  
  }



  return (
    <div className='flex header'>
     
        <div className='absolute text-white top-8 text-2xl right-12 cursor-pointer z-10 '>
           <p >{showMenu ? <X className='icon' onClick={closeMenu} /> : <Menu onClick={() => setShowMenu(true)} /> }</p>
        </div>
    </div>
  )
}

export default Header
