import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Header = () => {
    
  const { setShowMenu } = useContext(UserContext);

  return (
    <div className='flex header'>
     
        <div className='absolute text-white top-8 text-2xl right-12 cursor-pointer z-10 '>
           <p onClick={() => setShowMenu(true)}>menu</p>
        </div>
    </div>
  )
}

export default Header
