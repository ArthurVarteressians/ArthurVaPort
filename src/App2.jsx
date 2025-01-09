import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience2 from "./components/Experience2";
import { UI } from "./components/UI";

function App2() {
  return (
    <>
      <UI />
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={<mesh />}>
            <Experience2 />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App2;
