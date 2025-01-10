import React, { useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Experience } from "./components/Experience"; // 3D office scene
import { Interface } from "./components/Interface"; // Text interface
import { Menu } from "./components/Menu"; // Navigation menu
import { framerMotionConfig } from "./config";
import { LoadingScreen } from "./components/LoadingScreen"; // Initial loading screen
import { Cursor } from "./components/Cursor"; // Custom cursor

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-58MH61H232`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-58MH61H232");

    // Track page view on component mount
    gtag("config", "G-58MH61H232", {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig transition={framerMotionConfig}>
        <Canvas shadows camera={{ position: [0, 3, 12], fov: 40 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={1} damping={0.1}>
            <Scroll>
              <Experience menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
