import React from 'react'
import { Canvas } from '@react-three/fiber'
import Home from './Home'
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import Lights from './Lights'
const CanvasElement = () => {
  return (
    <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [4, -0.8, 5] } }>
       
         <ScrollControls pages={3} damping={0.1}>

        <Scroll>
        <Lights />
     <Home />
     </Scroll>
     </ScrollControls>
    </Canvas>
  )
}

export default CanvasElement
