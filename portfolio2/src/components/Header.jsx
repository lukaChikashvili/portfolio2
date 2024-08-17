import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Menu, X } from 'lucide-react';


const Header = () => {
  const { setShowMenu, showMenu, setClosed , setReset, projects, aboutPage} = useContext(UserContext);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setClosed(false);
      setReset(true);

    } else {
      setShowMenu(true);
      setClosed(false);
      setReset(false);
    }
  };

  return (
    <div className='flex header'>
      <div className='absolute text-white top-8 text-2xl right-12 cursor-pointer z-10'>
        <span style={{display: projects || aboutPage ? "none" : "flex"}}>{showMenu ? <X onClick={toggleMenu} /> : <Menu onClick={toggleMenu} />}</span>
      </div>
    </div>
  );
};

export default Header;
