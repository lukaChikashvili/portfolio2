



import { useGLTF, useMatcapTexture } from '@react-three/drei'
import React, { useEffect } from 'react'
import { MeshMatcapMaterial } from 'three';


const Home = () => {

// use matcap material
const [ texture ] = useMatcapTexture('AB2D08_C35E5A_C75522_C56C70', 256);
const [ texture2 ] = useMatcapTexture('D8C949_F5F19E_6B7855_9A9858', 256);

// car 3d model
const car = useGLTF('./car.glb');

     
  return (
     <>
     
     <mesh receiveShadow position = {[ 0, -2, 0 ]} rotation = {[ -Math.PI * 0.5, 0, -0.8 ]}>
       <planeGeometry args={[ 150, 10 ]}/>
       <meshMatcapMaterial matcap={texture} />

     </mesh>

    <primitive castshadow object={car.scene} rotation = {[ 0, -2.45, 0 ]}  position = {[0.8, -2, 1 ]} />


   

    
     </>
  )
}

export default Home
