import { Float, useGLTF } from "@react-three/drei"



const Home = () => {


  
     
  return (
     <>
     <Float>
      <mesh position={[-10, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh position={[0, -2, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh position={[0, 3, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial />
      </mesh>

      <mesh position={[4, 0, 0]} castShadow>
        <sphereGeometry />
        <meshLambertMaterial  />
      </mesh>
      </Float>
  
     </>
  )
}

export default Home
