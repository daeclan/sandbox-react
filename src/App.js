import React from "react";
import { Canvas, useThree, useFrame } from 'react-three-fiber'
import { CubeTextureLoader, LinearMipmapLinearFilter, WebGLCubeRenderTarget, RGBFormat, CubeCamera } from 'three'
import "./styles.css";

function Sandbox() {
  const { scene } = useThree()
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ])
  scene.background = texture;
  return null
}


function Sphere() {
  const { gl, scene } = useThree();
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  })
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene))

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
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
      {/* <CameraControls /> */}
      <Sphere />
      <Sandbox />
    </Canvas>
  );
}
