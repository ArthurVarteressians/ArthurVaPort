import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Experience } from "./components/Experience"; // 3D office scene
import { LoadingScreen } from "./components/LoadingScreen"; // Initial loading screen
import { Cursor } from "./components/Cursor"; // Custom cursor

function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-58MH61H232`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-58MH61H232", {
      page_path: window.location.pathname,
    });
  }, []);
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Form section not found");
    }
  };

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />

      <MotionConfig
        transition={{
          duration: 0.5,
        }}
      >
        <div className="relative w-full h-screen">
          {/* 3D Scene */}
          <Canvas shadows camera={{ position: [0, 3, 12], fov: 40 }}>
            <Experience menuOpened={false} />
          </Canvas>

          {/* Interface Overlay */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-6">
            <div className="text-center lg:text-left space-y-6 max-w-md md:max-w-lg lg:max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I'm Arthur Varteressians
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                Welcome to my portfolio! A passionate developer, ready to
                showcase my work and take on exciting new projects.
              </p>

              <button
                onClick={scrollToForm} // Scroll function on button click
                className="px-6 py-3 md:px-8 md:py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 text-sm md:text-base lg:text-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
