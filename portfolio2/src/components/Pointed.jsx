import React, { useContext } from 'react'
import Particles from './Particles'
import { UserContext } from "../context/UserContext"

const Pointed = () => {
  const { projects } = useContext(UserContext);
  return (
   <>
     {projects && <Particles /> }
   </>
  )
}

export default Pointed
