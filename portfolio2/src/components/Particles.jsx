
import React, { useRef } from 'react'
import vertex from '../shaders/particle/vertex.glsl';
import fragment from '../shaders/particle/fragment.glsl';
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'


const Particles = () => {


    // 2d canvas
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    canvas.style.position = "fixed";
    canvas.style.width = "512px";
    canvas.style.height = "512px";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 10;
    document.body.append(canvas);

    // context

   const context = canvas.getContext('2d');
   context.fillRect(0, 0, canvas.width, canvas.height);
  
   
  



  const texture = useTexture('./images.jpg');
   
    const particleRef = useRef();

    const particleGeometry = new THREE.PlaneGeometry(10, 10, 128, 128);

    const particleMaterial = new THREE.ShaderMaterial({
       vertexShader: vertex,
       fragmentShader: fragment,
       uniforms: {
        uPictureTexture: new THREE.Uniform(texture)
       }
    });



  return (
   <>
     <primitive ref = {particleRef} object={new THREE.Points(particleGeometry, particleMaterial)} rotation = {[ 0, 0.7, 0 ]} />
   </>
  )
}

export default Particles
