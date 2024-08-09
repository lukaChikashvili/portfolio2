import React from 'react'
import { Canvas } from '@react-three/fiber'
import Home from './Home'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
const CanvasElement = () => {
  return (
    <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [4, -0.8, 5] } }>
        <OrbitControls makeDefault />
        <Lights />
     <Home />

    </Canvas>
  )
}

export default CanvasElement
