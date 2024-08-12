
import React, { useRef } from 'react'
import vertex from '../shaders/particle/vertex.glsl';
import fragment from '../shaders/particle/fragment.glsl';
import * as THREE from 'three'


const Particles = () => {
   
    const particleRef = useRef();

    const particleGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);

    const particleMaterial = new THREE.ShaderMaterial({
       vertexShader: vertex,
       fragmentShader: fragment
    });



  return (
   <>
     <primitive ref = {particleRef} object={new THREE.Points(particleGeometry, particleMaterial)} rotation = {[ 0, 0.7, 0 ]} />
   </>
  )
}

export default Particles
