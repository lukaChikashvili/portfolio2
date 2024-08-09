
import { Text3D, useGLTF, useMatcapTexture, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { UserContext } from '../context/UserContext';


const Home = () => {

// use matcap material
const [ texture ] = useMatcapTexture('AB2D08_C35E5A_C75522_C56C70', 256);


// car 3d model
const car = useGLTF('./car.glb');

// camera
const { camera } = useThree();
const scroll = useScroll();

// car ref
let carRef = useRef();
let textRef = useRef();
let planeRef = useRef();


// context
const { firstPage } = useContext(UserContext);


useEffect(() => {
  if(firstPage) {
    gsap.to(camera.position, {
       x: -20,
       y: -1,
       z: -5,
      duration: 3,
      ease: 'power2.inOut'
    });

    gsap.to(carRef.current.position, {
      x: -20,
       y: -2,
       z: 0,
      duration: 3,
      ease: 'power2.inOut'
    });
  

    gsap.to(camera.rotation, {
      x: 0,
      y: 3.5,
      z: 0,
     duration: 3,
     ease: 'power2.inOut'
   });

   gsap.to(textRef.current.material, {
    opacity: 1,
    duration: 3,
    ease: 'power2.inOut',
    delay: 2,
  });

  gsap.to(planeRef.current.position, {
    x: -15,
    duration: 3,
    ease: 'power2.inOut',
   
  });
  


  }
}, [firstPage, textRef ]);


     
  return (
     <>
     
     <mesh receiveShadow position = {[ 0, -2, 0 ]} rotation = {[ -Math.PI * 0.5, 0, -0.8 ]} ref={planeRef}>
       <planeGeometry args={[ 150, 20 ]}/>
       <meshMatcapMaterial matcap={texture} />

     </mesh>

    <primitive ref = {carRef} castshadow object={car.scene} rotation = {[ 0, -2.45, 0 ]}  position = {[0.8, -2, 1 ]} />


    <Text3D font='./helvetiker_regular.typeface.json' 
            size={ 0.75 }
            height={ 0.2 }
            rotation={[0, 2, 0 ]}
            position={[0, -1.9, 5]}
            castShadow
            >
       Scroll
       <meshMatcapMaterial color="#fff" />
    </Text3D>

   {firstPage &&  <Text3D font='./helvetiker_regular.typeface.json' 
   ref={textRef
  }
            size={ 3 }
            height={ 0.2 }
            rotation={[0, -2.2, 0 ]}
            position={[-10, -2, -1]}
            bevelThickness={1}
            bevelEnabled
            castShadow
            >
       ABOUT
       <meshMatcapMaterial color="lightgray" transparent opacity={0}/>
    </Text3D>}
    
     </>
  )
}

export default Home
