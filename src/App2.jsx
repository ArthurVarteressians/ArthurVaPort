import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience2 from "./components/Experience2"; // 3D Book Model
import { Environment } from "@react-three/drei";

function App2() {
  return (
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
  );
}

export default App2;
