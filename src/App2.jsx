import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience2 from "./components/Experience2"; // 3D Book Model
import SkillsComponent from "./components/SkillsComponent"; // Skills component
import { UI } from "./components/UI"; // Book navigation UI

function App2() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Left Section: Skills */}
      <div className="w-full lg:w-[40%] flex justify-center align-middle p-2">
        <SkillsComponent />
      </div>
      {/* Right Section: 3D Book */}
      <div className="w-full lg:w-[60%] flex justify-center items-center relative h-[50%] lg:h-full">
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
