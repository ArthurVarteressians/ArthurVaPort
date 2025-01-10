import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience2 from "./components/Experience2"; // 3D Book Model
import SkillsComponent from "./components/SkillsComponent"; // Skills component
import { UI } from "./components/UI"; // Book navigation UI

function App2() {
  return (
    <div className="w-full h-screen bg-black flex flex-col lg:flex-row">
      {/* Left Section: Skills */}
      <div className="lg:w-[50%] w-full p-8 flex items-center justify-center overflow-y-auto">
        <div className="w-full max-w-[85%] md:max-w-[80%] lg:max-w-[75%]">
          <SkillsComponent />
        </div>
      </div>

      {/* Right Section: 3D Book */}
      <div className="lg:w-[50%] w-full h-full flex justify-center items-center relative">
        <Canvas
          shadows
          className="max-w-full"
          camera={{
            position: [-0.5, 2, window.innerWidth > 800 ? 3 : 7],
            fov: 40,
          }}
        >
          <Suspense fallback={null}>
            <Experience2 />
          </Suspense>
        </Canvas>

        {/* Floating Navigation Buttons */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center">
          <div className="bg-black/80 p-4 rounded-lg">
            <UI />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
