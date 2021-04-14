import React from "react";
import { Canvas, useThree } from 'react-three-fiber'
import { CubeTextureLoader } from 'three'
import "./styles.css";

function Sandbox() {
  const { scene } = useThree()
  const loader = new CubeTextureLoader();
  const texture
}

function Sphere() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <Sphere />
    </Canvas>
  );
}
