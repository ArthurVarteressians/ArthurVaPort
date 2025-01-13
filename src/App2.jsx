import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import React from "react";
import SkillsComponent from "./components/SkillsComponent"; // Skills component
import { UI } from "./components/UI"; // Book navigation UI
import Form from "./components/Form";
const Experience2 = React.lazy(() => import("./components/Experience2"));

function App2() {
  return (
    <div>
      <div className="w-full bg-gray-900  h-screen flex flex-col lg:flex-row">
        <div className="w-full lg:w-[40%] m-auto flex justify-center align-middle p-2">
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
            <div className="bg-black/80 p-1 rounded-lg">
              <UI />
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App2;
