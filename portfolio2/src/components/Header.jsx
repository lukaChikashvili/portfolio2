import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Menu, X } from 'lucide-react';
import gsap from  'gsap'

const Header = () => {
  const { setShowMenu, showMenu, setClosed } = useContext(UserContext);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setClosed(false);

    } else {
      setShowMenu(true);
      setClosed(false);
    }
  };

  return (
    <div className='flex header'>
      <div className='absolute text-white top-8 text-2xl right-12 cursor-pointer z-10'>
        <span>{showMenu ? <X onClick={toggleMenu} /> : <Menu onClick={toggleMenu} />}</span>
      </div>
    </div>
  );
};

export default Header;
