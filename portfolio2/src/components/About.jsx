import React, { useContext, useRef } from 'react'

import * as THREE from 'three'
import vertextImage from '../shaders/imageShader/vertextImage.glsl';
import fragmentImage from '../shaders/imageShader/fragmentImage.glsl'
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const About = () => {

    const texture = useTexture('./picture.png')
   
    let plane = useRef();

    const uniforms = useRef({
       uHeight: { value: 0.25},
       uFrequency: { value: 3},
       uTexture: { value: texture},
       uTime: { value: 0}
    })
   

    useFrame(() => {
       plane.current.material.uniforms.uTime.value += 0.025;
    })

  return (
  <>
    <mesh ref={plane}  rotation =  {[ 0, 0.7, 0 ]}  position = {[ 4, 0, -3 ]}>
       <planeGeometry args = {[7,8, 428, 428]} />
        <shaderMaterial 
        vertexShader={vertextImage}
        fragmentShader={fragmentImage}
        uniforms={uniforms.current}
        side={THREE.DoubleSide}
        
        />
        
       
     </mesh>
    
  </>
  )
}

export default About
