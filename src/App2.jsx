import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import Experience2 from "./components/Experience2"; // Experience for 3D book
import { UI } from "./components/UI"; // Book controls for navigation

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
        <Suspense fallback={null}>
          <Experience2 />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App2;
