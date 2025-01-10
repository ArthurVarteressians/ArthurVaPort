import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience2 from "./components/Experience2"; // 3D Book Model
import { UI } from "./components/UI"; // Restore the UI navigation

function App2() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Canvas
        shadows
        camera={{
          position: [-0.5, 2, window.innerWidth > 800 ? 3 : 7], // Larger view for desktop
          fov: 40, // Slightly larger field of view
        }}
      >
        <Suspense fallback={null}>
          <Experience2 />
        </Suspense>
      </Canvas>

      {/* Restore UI buttons */}
      <div className="absolute bottom-10 left-0 w-full">
        <UI />
      </div>
    </div>
  );
}

export default App2;
