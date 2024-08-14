import React, { useContext, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Home from './Home'
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import Lights from './Lights'
import Pointed from './Pointed'
import About from './About'
import { UserContext } from '../context/UserContext'
const CanvasElement = () => {

  const { aboutPage } = useContext(UserContext);


  return (
    <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [4, -0.8, 5] } }>
  
        

       
        <Lights />
     <Home />
     <Pointed />
     {aboutPage && <About /> }

  
  
    </Canvas>
  )
}

export default CanvasElement
