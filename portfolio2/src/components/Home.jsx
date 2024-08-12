import { Float, Html, Text3D, useGLTF } from "@react-three/drei"
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../context/UserContext"
import gsap from 'gsap'
import { EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from "postprocessing"
import * as THREE from 'three'

const Home = () => {

  const { changePosition, projects } = useContext(UserContext);

  let first = useRef();
  let second = useRef();
  let third = useRef();
  let fourth = useRef();
  let fifth = useRef();
  let sixth = useRef();
  let seven = useRef();
  let eight = useRef();
  let nine = useRef();
  let ten = useRef();


  
  
  useEffect(() => {


    
      if(changePosition) {
         gsap.to(first.current.position, {
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(second.current.position, {
          x: -10,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: -10,
          y: 2,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: -10,
          y: -2,
          z: 2,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -10,
          y: -2,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: 6,
          y: 2,
          z: -10,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(seven.current.position, {
          x: 4,
          y: 2,
          z: -10,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: 4,
          y: 0,
          z: -6,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: 5,
          y: -1.5,
          z: -6,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: 6.5,
          y: -1.5,
          z: -7,
          duration: 2,
          ease: 'power2.inOut'
         });
      }else {
        
        gsap.to(first.current.position, {
          x: -10,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         
         gsap.to(second.current.position, {
          x: 0,
          y: -2,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: 0,
          y: 3,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: 4,
          y: 0,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -5,
          y: 3,
          z: 0,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -16,
          y: 4,
          z: 3,
          duration: 2,
          ease: 'power2.inOut'
         });
       
         gsap.to(seven.current.position, {
          x: 5,
          y: 3,
          z: -5,
          duration: 2,
          ease: 'power2.inOut'
         });
        
         gsap.to(eight.current.position, {
          x: 5,
          y: -2,
          z: -3,
          duration: 2,
          ease: 'power2.inOut'
         });
       
         gsap.to(nine.current.position, {
          x: -6,
          y: 3,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
        
         gsap.to(nine.current.position, {
          x: -6,
          y: 3,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
         
         gsap.to(ten.current.position, {
          x: -5,
          y: -2,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });
      }

// projects
      if(projects) {
        gsap.to(first.current.position, {
          z: 4,
          duration: 2,
          ease: 'power2.inOut',
          
         });

         gsap.to(second.current.position, {
          x: -10,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(third.current.position, {
          x: -10,
          y: 2,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fourth.current.position, {
          x: -12,
          y: 4,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(fifth.current.position, {
          x: -16,
          y: 4,
          z: 5,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(sixth.current.position, {
          x: -15,
          y: 2,
          z: 6,
          duration: 2,
          ease: 'power2.inOut'
         });

        
         gsap.to(seven.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(eight.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(nine.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

         gsap.to(ten.current.position, {
          x: -20,
          y: -20,
          z: 4,
          duration: 2,
          ease: 'power2.inOut'
         });

        
      
        


      }

   

  }, [changePosition, projects]);
     



  return (
     <>



   <Float rotationIntensity={ 0.25 }>
    
      <mesh ref={first} position={[-10, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />

      
      </mesh>

      <mesh ref={second} position={[0, -2, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={third} position={[0, 3, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={fourth} position={[4, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>
    

      <mesh ref={fifth} position={[-5, 3, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={sixth} position={[-16, 0, 3]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>

      <mesh ref={seven} position={[5, 3, -5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={eight} position={[5, -2, -3]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>

      <mesh ref={nine} position={[-6, 3, 5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh ref={ten} position={[-5, -2, 5]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>
      
      </Float>

  
     </>
  )
}

export default Home
